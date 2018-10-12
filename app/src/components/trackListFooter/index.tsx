import * as React from 'react';
import {
  FaCloudUploadAlt,
  FaTimes,
} from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../input';
import UploadBox from '../uploadBox';
import { uploadTrack } from '../../redux/actions/track';
import {
  Container,
  UploadButton,
  FormContainer,
  Form,
  Button,
  FormMessage,
  FieldContainer,
} from './styles';

interface PropTypes {
  uploadTrack?: any;
  children?: any;
}

class TrackListFooter extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);

    this.state = {
      hideForm: true,
      inputName: '',
      file: null,
      formMessage: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({ hideForm: !this.state.hideForm });
  }

  handleSubmit(event) {
    const {
      inputName,
      file,
    } = this.state;

    if (!inputName || !file) {
      this.setState({ formMessage: 'Preencha todos os campos.' });
    } else {
      this.props.uploadTrack(inputName, file);
      this.setState({ formMessage: '' });
    }

    event.preventDefault();
  }

  renderButton() {
    if (!this.state.hideForm) {
      return (
        <UploadButton
          onClick={this.handleClick}
        >
          <span></span>
          <FaTimes size={30} />
        </UploadButton>
      );
    }

    return (
      <UploadButton
        onClick={this.handleClick}
      >
        <span>Enviar áudio</span>
        <FaCloudUploadAlt size={30} />
      </UploadButton>
    );
  }

  render() {
    return (
      <Container>
        {this.renderButton()}

        <FormContainer hidden={this.state.hideForm}>
          <Form
            onSubmit={this.handleSubmit}
          >
            <FieldContainer>
              <Input
                placeholder={'Digite o nome do áudio...'}
                value={this.state.inputName}
                onChange={value => this.setState({ inputName: value })}
              />
            </FieldContainer>
            <FieldContainer>
              <UploadBox
                accept={'audio'}
                label={'Arraste seu áudio ou clique para escolher.'}
                onChange={file => this.setState({ file })}
              />
            </FieldContainer>
            {this.state.formMessage && <FormMessage>{this.state.formMessage}</FormMessage>}
            <FieldContainer>
              <Button type={'submit'}>Enviar</Button>
            </FieldContainer>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    uploadTrack,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(TrackListFooter);
