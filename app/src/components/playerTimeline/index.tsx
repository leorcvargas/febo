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
    const minutes = Math.floor(seconds / 60);
    const secondsResult = Math.floor(seconds - (minutes * 60));

    return `${minutes}:${secondsResult < 10 ? '0' + secondsResult : secondsResult}`;
  }

  render() {
    console.log(this.props.duration);
    const {
      currentTime,
      duration,
    } = this.props;

    return (
      <TimelineContainer>
        <Timeline
          type={'range'}
          max={duration}
          value={currentTime}
          onChange={event => this.props.onSeek(event.target.value)}
          step={'1'}
        />
        <TimePanel>
          <span>{this.defineTimeLabel(this.props.currentTime)}</span>
          <span>{this.defineTimeLabel(this.props.duration)}</span>
        </TimePanel>
      </TimelineContainer>
    );
  }
}

export default PlayerTimeline;
