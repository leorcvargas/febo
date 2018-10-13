import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TrackInterface } from 'src/interfaces/track';
import { changeTrack } from '../../redux/actions/track';
import PlayerActions from '../playerActions';
import PlayerTimeline from '../playerTimeline';
import {
  PlayerContainer,
} from './styles';

interface PropTypes {
  tracks: TrackInterface[];
  currentTrack: TrackInterface;
  changeTrack: any;
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
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.toggleVolume = this.toggleVolume.bind(this);
    this.onSeek = this.onSeek.bind(this);
    this.changeTrack = this.changeTrack.bind(this);
  }

  componentDidUpdate(prevProps: PropTypes) {
    if (prevProps.currentTrack._id !== this.props.currentTrack._id) {
      this.startNewTrack();
    }
  }

  setCurrentTimeInterval() {
    this.currentTimeInterval = setInterval(() => {
      if (this.audioRef.current) {
        const isFinished = Math.floor(this.audioRef.current.currentTime) === this.audioRef.current.duration;

        if (isFinished || !this.props.currentTrack) {
          clearInterval(this.currentTimeInterval);
        }

        this.setState({ currentTime: this.audioRef.current.currentTime });
      }
    });
  }

  startNewTrack() {
    this.setState({
      currentTime: 0,
      play: true,
    }, () => {
      this.setCurrentTimeInterval();
      this.audioRef.current.currentTime = 0;
      this.audioRef.current.play()
        .catch(() => {});
    });
  }

  togglePlay(): void {
    if (this.state.play) {
      this.audioRef.current.pause();
      clearInterval(this.currentTimeInterval);
    } else {
      this.audioRef.current.play();
      this.setCurrentTimeInterval();
    }

    this.setState({ play: !this.state.play });
  }

  toggleVolume(value: number): void {
    const vol = this.audioRef.current.volume + value;
    if (vol > 1) {
      this.audioRef.current.volume = 1;
    } else if (vol < 0) {
      this.audioRef.current.volume = 0;
    } else {
      this.audioRef.current.volume = vol;
    }
  }

  changeTrack(way: number) {
    const { currentTrack, tracks } = this.props;
    this.props.changeTrack(currentTrack._id, tracks, way);
  }

  onSeek(seconds: number) {
    this.audioRef.current.currentTime = seconds;
    this.setState({ currentTime: seconds });
  }

  canChangeTrack(): { next: boolean, previous: boolean } {
    const { currentTrack, tracks } = this.props;
    const currentPosition = tracks.findIndex(track => track._id === currentTrack._id);

    if (tracks.length === 1) {
      return { next: false, previous: false };
    }

    if (currentPosition === tracks.length - 1) {
      return { next: false, previous: true };
    }

    if (!currentPosition && tracks.length > 1) {
      return { next: true, previous: false };
    }

    return { next: true, previous: true };
  }

  render() {
    return (
      <PlayerContainer>
        <PlayerTimeline
          onSeek={this.onSeek}
          duration={this.audioRef.current ? this.audioRef.current.duration : 0}
          currentTime={this.state.currentTime}
        />
        <PlayerActions
          play={this.state.play}
          togglePlay={this.togglePlay}
          toggleVolume={this.toggleVolume}
          changeTrack={this.changeTrack}
          canChangeTrack={this.canChangeTrack()}
        />
        <audio
          src={this.props.currentTrack.audio}
          ref={this.audioRef}
        />
      </PlayerContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks.list,
    currentTrack: state.tracks.currentTrack,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeTrack,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
