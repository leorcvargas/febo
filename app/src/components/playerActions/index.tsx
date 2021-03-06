import * as React from 'react';
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeDown,
} from 'react-icons/fa';

import {
  PlayerButton,
  PlayerActionsRow,
} from './styles';

interface PropTypes {
  play: boolean;
  togglePlay: any;
  toggleVolume: any;
  changeTrack: any;
  canChangeTrack: { next: boolean, previous: boolean };
  children?: any;
}

class PlayerActions extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PlayerActionsRow>
        <PlayerButton
          onClick={() => this.props.toggleVolume(-0.1)}
        >
          <FaVolumeDown size={20} />
        </PlayerButton>

        <PlayerButton
          onClick={() => this.props.changeTrack(-1)}
          disabled={!this.props.canChangeTrack.previous}
        >
          <FaBackward size={30} />
        </PlayerButton>

        <PlayerButton onClick={this.props.togglePlay}>
          {
            !this.props.play ?
              <FaPlay size={40} />
              :
              <FaPause size={40} />
          }
        </PlayerButton>

        <PlayerButton
          onClick={() => this.props.changeTrack(1)}
          disabled={!this.props.canChangeTrack.next}
        >
          <FaForward size={30} />
        </PlayerButton>

        <PlayerButton onClick={() => this.props.toggleVolume(0.1)}>
          <FaVolumeUp size={20} />
        </PlayerButton>
      </PlayerActionsRow>
    );
  }
}

export default PlayerActions;
