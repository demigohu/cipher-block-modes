// ECBMode.js
import React from 'react';
import CryptoJS from 'crypto-js';
import './Mode.css';

class ECBMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintext: '',
      key: '',
      ciphertext: '',
      decryptedText: ''
    };
  }

  handleEncrypt = () => {
    const ciphertext = CryptoJS.AES.encrypt(this.state.plaintext, this.state.key).toString();
    this.setState({ ciphertext });
  };

  handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(this.state.ciphertext, this.state.key);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    this.setState({ decryptedText });
  };

  render() {
    return (
      <div className="mode-container ecb">
        <h2>ECB Mode</h2>
        <div className="form-group">
          <label htmlFor="ecb-plaintext">Plaintext:</label>
          <input id="ecb-plaintext" type="text" value={this.state.plaintext} onChange={(e) => this.setState({ plaintext: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="ecb-key">Key:</label>
          <input id="ecb-key" type="text" value={this.state.key} onChange={(e) => this.setState({ key: e.target.value })} />
        </div>
        <button onClick={this.handleEncrypt}>Encrypt</button>
        <div className="form-group">
          <label htmlFor="ecb-ciphertext">Ciphertext:</label>
          <input id="ecb-ciphertext" type="text" value={this.state.ciphertext} onChange={(e) => this.setState({ ciphertext: e.target.value })} />
        </div>
        <button onClick={this.handleDecrypt}>Decrypt</button>
        <div className="result">Decrypted Text: {this.state.decryptedText}</div>
      </div>
    );
  }
}

export default ECBMode;
