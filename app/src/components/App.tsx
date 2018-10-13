import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTracks } from '../redux/actions/track';
import { TrackInterface } from 'src/interfaces/track';
import Card from './card';
import CardImage from './cardImage';
import CardHeader from './cardHeader';
import Player from './player';
import TrackList from './trackList';
import UploadCard from './uploadCard';
import {
  PageView,
} from './styles';

interface PropTypes {
  tracks: TrackInterface[];
  currentTrack: TrackInterface;
  fetchTracks: any;
}

class App extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  renderCard() {
    if (!this.props.tracks.length) {
      return (
        <Card>
          <CardHeader>Lista de áudios vazia</CardHeader>
        </Card>
      );
    } else if (!this.props.currentTrack) {
      return (
        <Card>
          <CardHeader>Selecione um áudio da lista</CardHeader>
        </Card>
      );
    }

    return (
      <Card>
        <CardHeader>{this.props.currentTrack.name}</CardHeader>
        <CardImage source={this.props.currentTrack.img} />
        <Player />
      </Card>
    );
  }

  public render() {
    return (
      <PageView>
        <TrackList
          tracks={this.props.tracks}
          currentTrack={this.props.currentTrack}
        />
        {this.renderCard()}
        <UploadCard
          emptyListMode={!this.props.tracks.length ? true : false}
        />
      </PageView>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks.list,
    currentTrack: state.tracks.currentTrack,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTracks,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
