import styled from '../../styled-components';

export const Container = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background: #eaeaea;
  position: absolute;
  width: 250px;
  bottom: 15px;
  right: 15px;
  box-shadow: 0 0 2rem rgba(0,0,0,.4);
`;

export const UploadButton = styled.button`
  min-height: 40px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  /* background: linear-gradient(to bottom right, #00FF9B, #003EFF, #432C85); */
  color: #2f2f2f;
  background: #fff;
  border-radius: 6px;
  /* box-shadow: 0 0 2rem rgba(0,0,0,.4); */
  flex: 1;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  height: 300px;
  display: ${props => props.theme.hide ? 'none' : 'flex'}
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 0 2px rgba(0,0,0,.4);
  background: white;
  color: black;
  cursor: pointer;
  flex: 1;
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const ErrorMessage = styled.p`
  color: #ff5e5e;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

export const SuccessMessage = styled.p`
  color: #00c779;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

export const LoadingMessage = styled.p`
  color: #111;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;
