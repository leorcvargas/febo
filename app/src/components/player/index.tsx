import * as React from 'react';

import { TrackInterface } from 'src/interfaces/track';
import {
  PlayerContainer,
} from './styles';
import PlayerActions from '../playerActions';
import PlayerTimeline from '../playerTimeline';

interface PropTypes {
  track: TrackInterface;
  children?: any;
}

class Player extends React.Component<PropTypes, any> {
  private audioRef = React.createRef<HTMLAudioElement>();
  private currentTimeInterval = null;

  constructor(props) {
    super(props);

    this.state = {
      play: false,
      currentTime: 0,
      currentTrack: this.props.track,
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.onSeek = this.onSeek.bind(this);
  }

  componentDidUpdate(prevProps: PropTypes) {
    if (this.props.track._id !== this.props.track._id) {
      clearInterval(this.currentTimeInterval);
      this.audioRef.current.pause();
      this.audioRef.current.currentTime = 0;
      this.setState({
        currentTime: 0,
        currentTrack: this.props.track,
        play: false,
      });
    }
  }

  togglePlay(): void {
    if (this.state.play) {
      this.audioRef.current.pause();
      clearInterval(this.currentTimeInterval);
    } else {
      this.audioRef.current.play();
      this.currentTimeInterval = setInterval(() => {
        if (Math.floor(this.audioRef.current.currentTime) === this.audioRef.current.duration) {
          clearInterval(this.currentTimeInterval);
        }
        this.setState({ currentTime: this.audioRef.current.currentTime });
      });
    }

    this.setState({ play: !this.state.play });
  }

  onSeek(seconds: number) {
    this.audioRef.current.currentTime = seconds;
    this.setState({ currentTime: seconds });
  }

  render() {
    if (!this.props.track) {
      return null;
    }

    return (
      <PlayerContainer>
        <PlayerTimeline
          onSeek={this.onSeek}
          duration={this.audioRef.current ? this.audioRef.current.duration : 60}
          currentTime={this.state.currentTime}
        />
        <PlayerActions
          play={this.state.play}
          togglePlay={this.togglePlay}
        />
        <audio
          src={`${this.props.track.path}`}
          ref={this.audioRef}
        />
      </PlayerContainer>
    );
  }
}

export default Player;
