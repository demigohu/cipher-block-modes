// CBCMode.js
import React from 'react';
import CryptoJS from 'crypto-js';
import './Mode.css';

class CBCMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintext: '',
      key: '',
      iv: '',
      ciphertext: '',
      decryptedText: ''
    };
  }

  handleEncrypt = () => {
    const ciphertext = CryptoJS.AES.encrypt(this.state.plaintext, this.state.key, { iv: this.state.iv }).toString();
    this.setState({ ciphertext });
  };

  handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(this.state.ciphertext, this.state.key, { iv: this.state.iv });
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    this.setState({ decryptedText });
  };

  render() {
    return (
      <div className="mode-container cbc">
        <h2>CBC Mode</h2>
        <div className="form-group">
          <label htmlFor="cbc-plaintext">Plaintext:</label>
          <input id="cbc-plaintext" type="text" value={this.state.plaintext} onChange={(e) => this.setState({ plaintext: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="cbc-key">Key:</label>
          <input id="cbc-key" type="text" value={this.state.key} onChange={(e) => this.setState({ key: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="cbc-iv">IV (Initialization Vector):</label>
          <input id="cbc-iv" type="text" value={this.state.iv} onChange={(e) => this.setState({ iv: e.target.value })} />
        </div>
        <button onClick={this.handleEncrypt}>Encrypt</button>
        <div className="form-group">
          <label htmlFor="cbc-ciphertext">Ciphertext:</label>
          <input id="cbc-ciphertext" type="text" value={this.state.ciphertext} onChange={(e) => this.setState({ ciphertext: e.target.value })} />
        </div>
        <button onClick={this.handleDecrypt}>Decrypt</button>
        <div className="result">Decrypted Text: {this.state.decryptedText}</div>
      </div>
    );
  }
}

export default CBCMode;
