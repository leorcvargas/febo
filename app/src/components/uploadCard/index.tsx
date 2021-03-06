import * as React from 'react';
import {
  FaCloudUploadAlt,
  FaTimes,
} from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TrackInterface } from 'src/interfaces/track';
import Input from '../input';
import UploadBox from '../uploadBox';
import {
  uploadTrack,
  fetchTracks,
  setUploadingStatus,
} from '../../redux/actions/track';
import {
  Container,
  UploadButton,
  FormContainer,
  Form,
  Button,
  ErrorMessage,
  FieldContainer,
  SuccessMessage,
  Label,
  LoadingMessage,
} from './styles';

interface PropTypes {
  uploadResponse: { message: string, result: TrackInterface, error: boolean };
  emptyListMode?: boolean;
  uploadTrack?: any;
  isUploading?: boolean;
  setUploadingStatus: any;
  children?: any;
}

class UploadCard extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);

    this.state = {
      hideForm: !this.props.emptyListMode,
      inputName: '',
      file: null,
      formMessage: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileNameChange = this.handleFileNameChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.emptyListMode && this.state.hideForm) {
      this.setState({ hideForm: false });
    }
  }

  handleClick() {
    this.setState({ hideForm: !this.state.hideForm });
  }

  handleFileChange(file: File) {
    this.setState({
      file,
      inputName: file.name,
    });
  }

  handleFileNameChange(value: string) {
    this.setState({ inputName: value });
  }

  handleSubmit(event) {
    const {
      inputName,
      file,
    } = this.state;

    if (!inputName || !file) {
      this.setState({ formMessage: 'Preencha todos os campos.' });
    } else {
      this.props.setUploadingStatus(true);
      this.props.uploadTrack(inputName, file);

      this.setState({
        formMessage: '',
        inputName: '',
        file: null,
      });
    }

    event.preventDefault();
  }

  renderButton() {
    if (this.props.emptyListMode) {
      return <UploadButton />;
    }

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

  renderMessage() {
    const { uploadResponse } = this.props;
    const { formMessage } = this.state;

    if (this.props.isUploading) {
      return (
        <LoadingMessage>Enviando...</LoadingMessage>
      );
    }

    if (formMessage) {
      return (
        <ErrorMessage>{formMessage}</ErrorMessage>
      );
    }

    if (uploadResponse.message) {
      switch (uploadResponse.error) {
        case true:
          return (
            <ErrorMessage>{uploadResponse.message}</ErrorMessage>
          );

        case false:
          return (
            <SuccessMessage>{uploadResponse.message}</SuccessMessage>
          );
      }
    }

    return <p />;
  }

  render() {
    return (
      <Container>
        {this.renderButton()}

        <FormContainer theme={{ hide: this.state.hideForm }}>
          <Form onSubmit={this.handleSubmit}>
            <FieldContainer>
              <Label>Nome do arquivo:</Label>
              <Input
                placeholder={'Digite o nome do áudio...'}
                value={this.state.inputName}
                onChange={this.handleFileNameChange}
              />
            </FieldContainer>
            <FieldContainer>
              <UploadBox
                accept={'audio'}
                label={'Arraste seu áudio ou clique para escolher.'}
                onChange={this.handleFileChange}
                hasFile={this.state.file}
              />
            </FieldContainer>
            {this.renderMessage()}
            <FieldContainer>
              <Button type={'submit'}>Enviar</Button>
            </FieldContainer>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    uploadResponse: state.tracks.uploadResponse,
    isUploading: state.tracks.isUploading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    uploadTrack,
    fetchTracks,
    setUploadingStatus,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadCard);
