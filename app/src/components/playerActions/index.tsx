import * as React from 'react';
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
} from 'react-icons/fa';

import {
  PlayerButton,
  PlayerActionsRow,
} from './styles';

interface PropTypes {
  play: boolean;
  togglePlay: any;
  children?: any;
}

const PlayerActions = (props: PropTypes) => {

  return (
    <PlayerActionsRow>
      <PlayerButton>
        <FaBackward size={30} />
      </PlayerButton>

      <PlayerButton onClick={props.togglePlay}>
        {
          !props.play ?
            <FaPlay size={40} />
            :
            <FaPause size={40} />
        }
      </PlayerButton>

      <PlayerButton>
        <FaForward size={30} />
      </PlayerButton>
    </PlayerActionsRow>
  );
};

export default PlayerActions;
