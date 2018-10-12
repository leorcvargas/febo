import * as React from 'react';
import { connect } from 'react-redux';

import { TrackInterface } from 'src/interfaces/track';
import Card from './card';
import CardImage from './cardImage';
import Player from './player';
import TrackList from './trackList';
import {
  PageView,
} from './styles';
import { fetchTracks } from '../redux/actions/track';

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
          <h2>Selecione um áudio da lista para tocar</h2>
        </Card>
      );
    }

    return (
      <Card>
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
