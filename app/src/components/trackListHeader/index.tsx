import * as React from 'react';

import Input from '../input';
import { Container } from './styles';

interface PropTypes {
  children?: any;
}

class TrackListHeader extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
    };

    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(value: string) {
    this.setState({
      searchInput: value,
    });
  }

  render() {
    return (
      <Container>
        <Input
          placeholder={'Digite o nome do áudio...'}
          onChange={this.onChangeSearch}
          value={this.state.searchInput}
        />
      </Container>
    );
  }
}

export default TrackListHeader;
