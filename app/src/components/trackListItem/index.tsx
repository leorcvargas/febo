import * as React from 'react';
import {
  FaTrash,
} from 'react-icons/fa';

import {
  Container,
  TrackImage,
  TrackName,
  RemoveTrack,
  Wrapper,
} from './styles';
import { TrackInterface } from 'src/interfaces/track';

interface PropTypes {
  track: TrackInterface;
  onSelect: any;
  onRemove: any;
  selected?: boolean;
  children?: any;
}

class TrackList extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.track) {
      return null;
    }

    const {
      selected,
      onRemove,
      onSelect,
      track,
    } = this.props;

    return (
      <Wrapper>
        <Container
          onClick={() => onSelect(track)}
          style={selected ? { borderLeft: '5px solid #00ff9b' } : {}}
        >
          <TrackImage
            src={track.img ? track.img : 'images/default.png'}
          />
          <TrackName>{track.name}</TrackName>
        </Container>
        <RemoveTrack onClick={() => onRemove(track._id)}>
          <FaTrash />
        </RemoveTrack>
      </Wrapper>
    );
  }
}

export default TrackList;
