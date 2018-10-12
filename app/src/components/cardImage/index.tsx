import * as React from 'react';

import {
  Image,
  ImageContainer,
} from './styles';

interface PropTypes {
  source: string;
  children?: any;
}

const CardImage = (props: PropTypes) => {
  const { source } = props;
  const src = source ? source : 'images/default.png';

  return (
    <ImageContainer>
      <Image src={src} />
    </ImageContainer>
  );
};

export default CardImage;
