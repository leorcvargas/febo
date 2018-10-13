import styled from '../../styled-components';

export const TrackListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 2rem rgba(0,0,0,.4);
  width: 300px;
`;

export const List = styled.div`
  height: calc(100vh - 56px);
  overflow-y: scroll;
`;
