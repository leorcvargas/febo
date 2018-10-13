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
} from './styles';

interface PropTypes {
  uploadResponse: { message: string, result: TrackInterface, error: boolean };
  emptyListMode?: boolean;
  uploadTrack?: any;
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    uploadTrack,
    fetchTracks,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadCard);
