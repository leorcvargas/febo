import * as React from 'react';

import { Container } from './styles';

interface PropTypes {
  children?: any;
}

const TrackListHeader = (props: PropTypes) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default TrackListHeader;
