import styled from '../../styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding: 7px;
  cursor: pointer;
  position: relative;
  &:hover {
    background: #ececec;
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

export const RemoveTrack = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #aaa;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
