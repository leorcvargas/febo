import styled from '../../styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #eaeaea;
  margin-top: auto;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: linear-gradient(to bottom right, #00FF9B, #003EFF, #432C85);
  color: white;
  flex: 1;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  height: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Spacer = styled.div`
  margin: 5px 0;
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
`;

export const FormMessage = styled.p`
  color: #ff5e5e;
`;
