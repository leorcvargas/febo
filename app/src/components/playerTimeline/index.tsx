import * as React from 'react';

import {
  TimelineContainer,
  Timeline,
  TimePanel,
} from './styles';

interface PropTypes {
  onSeek: any;
  currentTime: number;
  duration: any;
  children?: any;
}

class PlayerTimeline extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);
  }

  defineTimeLabel(seconds: number) {
    if (isNaN(seconds)) {
      return '0:00';
    }
    const minutes = Math.floor(seconds / 60);
    const secondsResult = Math.floor(seconds - (minutes * 60));

    return `${minutes}:${secondsResult < 10 ? '0' + secondsResult : secondsResult}`;
  }

  render() {
    const {
      currentTime,
      duration,
      onSeek,
    } = this.props;

    return (
      <TimelineContainer>
        <Timeline
          type={'range'}
          max={isNaN(duration) ? 0 : duration}
          value={Math.floor(currentTime)}
          onChange={event => onSeek(event.target.value)}
          step={'1'}
        />
        <TimePanel>
          <span>{this.defineTimeLabel(currentTime)}</span>
          <span>{this.defineTimeLabel(duration)}</span>
        </TimePanel>
      </TimelineContainer>
    );
  }
}

export default PlayerTimeline;
