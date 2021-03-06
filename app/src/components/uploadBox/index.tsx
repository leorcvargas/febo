import * as React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

import {
  Uploader,
  Text,
} from './styles';

interface PropTypes {
  accept: 'image' | 'audio';
  label: string;
  onChange: any;
  hasFile: boolean;
}

class UploadBox extends React.Component<PropTypes, any> {
  constructor(props) {
    super(props);

    this.state = {
      invalid: false,
      isOver: false,
    };

    this.handleDrop = this.handleDrop.bind(this);
  }

  handleFileChange(files: FileList) {
    const file = files[0];

    if (file) {
      const sizeCheck = file.size <= 1024 * 1024 * 5;
      const typeCheck = file.type.includes(this.props.accept);

      if (typeCheck && sizeCheck) {
        this.props.onChange(file);
        this.setState({
          invalid: false,
        });
      } else {
        this.setState({ invalid: true });
      }

    } else {
      this.setState({
        invalid: false,
      });
    }
  }

  handleDrop(event) {
    event.preventDefault();
    this.handleFileChange(event.dataTransfer.files);
  }

  getStatus() {
    if (this.state.invalid) {
      return {
        message: 'Arquivo inválido!',
        color: '#ff5e5e',
      };
    }

    if (this.props.hasFile) {
      return {
        message: 'Arquivo selecionado.',
        color: '#00FF9B',
      };
    }

    return {
      message: 'Clique aqui ou arraste seu arquivo.',
      color: '',
    };
  }

  render() {
    const { accept } = this.props;

    const status = this.getStatus();

    return (
      <Uploader
        onDrop={this.handleDrop}
        onDragOver={event => event.preventDefault()}
        onDragEnter={event => this.setState({ isOver: true })}
        onDragLeave={event => this.setState({ isOver: false })}
        style={{ outlineColor: status.color }}
      >
        <FaCloudUploadAlt style={{ color: status.color }} />
        <Text>{status.message}</Text>
        <input
          type={'file'}
          accept={`${accept}/*`}
          onChange={event => this.handleFileChange(event.target.files)}
        />
      </Uploader>
    );
  }
}

export default UploadBox;
