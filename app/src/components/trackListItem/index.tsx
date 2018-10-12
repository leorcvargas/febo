import * as React from 'react';

import {
  Container,
  TrackImage,
  TrackName,
} from './styles';
import { TrackInterface } from 'src/interfaces/track';

interface PropTypes {
  track: TrackInterface;
  onClick: any;
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
      img,
      name,
    } = this.props.track;
    const src = img ? img : 'images/default.png';

    return (
      <Container
        onClick={() => this.props.onClick(this.props.track)}
      >
        <TrackImage src={src} />
        <TrackName>{name}</TrackName>
      </Container>
    );
  }
}

export default TrackList;
