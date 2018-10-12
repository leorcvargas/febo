import * as React from 'react';

import { InputText } from './styles';

interface PropTypes {
  placeholder?: string;
  onChange?: any;
  value?: string;
}

const Input = (props: PropTypes) => {
  const {
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <InputText
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  );
};

export default Input;
