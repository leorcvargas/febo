import * as React from 'react';

import { CardContainer } from './styles';

interface PropTypes {
  children: any;
}

const Card = (props: PropTypes) => {
  return (
    <CardContainer>
      {props.children}
    </CardContainer>
  );
};

export default Card;
