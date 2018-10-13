import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  chooseTrack,
  removeTrack,
} from '../../redux/actions/track';
import TrackListHeader from '../trackListHeader';
import TrackListItem from '../trackListItem';
import { TrackInterface } from 'src/interfaces/track';
import {
  TrackListContainer,
  List,
} from './styles';

interface PropTypes {
  tracks: TrackInterface[];
  currentTrack: TrackInterface;
  chooseTrack: any;
  removeTrack: any;
  children?: any;
}

class TrackList extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);
  }

  renderTracks() {
    return this.props.tracks.map((track, index) => {
      const isSelected = this.props.currentTrack
        ? this.props.currentTrack._id === track._id
        : false;

      return (
        <TrackListItem
          track={track}
          key={Date.now() + index}
          onSelect={this.props.chooseTrack}
          onRemove={this.props.removeTrack}
          selected={isSelected}
        />
      );
    });
  }

  render() {
    return (
      <TrackListContainer>
        <TrackListHeader />
        <List>
          {this.renderTracks()}
        </List>
      </TrackListContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    chooseTrack,
    removeTrack,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(TrackList);
