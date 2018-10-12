import styled from '../../styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding: 7px;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`;

export const TrackName = styled.p`
  margin: 5px 0 0 10px;
  color: #424242;
  font-weight: 600;
`;

export const TrackImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;
