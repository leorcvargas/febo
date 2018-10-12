import * as React from 'react';
import { connect } from 'react-redux';

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
    if (!this.props.currentTrack) {
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
        <Player track={this.props.currentTrack} />
      </Card>
    );
  }

  public render() {
    return (
      <PageView>
        <TrackList tracks={this.props.tracks} />
        {this.renderCard()}
        <UploadCard />
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

function mapDispatchToProps() {
  return { fetchTracks };
}

export default connect(mapStateToProps, mapDispatchToProps())(App);
