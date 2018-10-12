import styled from '../../styled-components';

export const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TimePanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Timeline = styled.input`
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  height: 10px;
  border-radius: 6px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: linear-gradient(to bottom right, #00FF9B, #00aa68);
    cursor: pointer;
    border-radius: 50%;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: linear-gradient(to bottom right, #00FF9B, #00aa68);
    cursor: pointer;
    border-radius: 50%;
  }
`;
