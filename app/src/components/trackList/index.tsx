import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TrackListHeader from '../trackListHeader';
import TrackListItem from '../trackListItem';
import { TrackInterface } from 'src/interfaces/track';
import {
  TrackListContainer,
  List,
} from './styles';
import { chooseTrack } from '../../redux/actions/track';

interface PropTypes {
  tracks: TrackInterface[];
  chooseTrack: any;
  children?: any;
}

class TrackList extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);
  }

  renderTracks() {
    return this.props.tracks.map((track, index) => (
      <TrackListItem
        track={track}
        key={Date.now() + index}
        onClick={this.props.chooseTrack}
      />
    ));
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
  return bindActionCreators({ chooseTrack }, dispatch);
}

export default connect(null, mapDispatchToProps)(TrackList);
