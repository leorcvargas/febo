import styled from '../../styled-components';

export const Uploader = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.02);
  cursor: pointer;
  justify-content: center;
  outline: 1px dashed #ccc;
  outline-offset: 1px;
  position: relative;
  flex: 1;
  & input {
    display: none;
  }

  & svg {
    color: rgba(0, 0, 0, 0.2);
    font-size: 5em;
  }

  &:hover {
    outline-color: #003EFF;
    & svg {
      color: #003EFF;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
`;
