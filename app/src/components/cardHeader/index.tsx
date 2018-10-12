import * as React from 'react';

import {
  Header,
  Title,
} from './styles';

interface PropTypes {
  children?: any;
}

const CardHeader = (props: PropTypes) => {
  return (
    <Header>
      <Title>
        {props.children}
      </Title>
    </Header>
  );
};

export default CardHeader;
