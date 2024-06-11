// CTRMode.js
import React from 'react';
import CryptoJS from 'crypto-js';
import './Mode.css';

class CTRMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintext: '',
      key: '',
      nonce: '',
      ciphertext: '',
      decryptedText: ''
    };
  }

  handleEncrypt = () => {
    const ciphertext = CryptoJS.AES.encrypt(this.state.plaintext, this.state.key, { nonce: this.state.nonce }).toString();
    this.setState({ ciphertext });
  };

  handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(this.state.ciphertext, this.state.key, { nonce: this.state.nonce });
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    this.setState({ decryptedText });
  };

  render() {
    return (
      <div className="mode-container ctr">
        <h2>CTR Mode</h2>
        <div className="form-group">
          <label htmlFor="ctr-plaintext">Plaintext:</label>
          <input id="ctr-plaintext" type="text" value={this.state.plaintext} onChange={(e) => this.setState({ plaintext: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="ctr-key">Key:</label>
          <input id="ctr-key" type="text" value={this.state.key} onChange={(e) => this.setState({ key: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="ctr-nonce">Nonce:</label>
          <input id="ctr-nonce" type="text" value={this.state.nonce} onChange={(e) => this.setState({ nonce: e.target.value })} />
        </div>
        <button onClick={this.handleEncrypt}>Encrypt</button>
        <div className="form-group">
          <label htmlFor="ctr-ciphertext">Ciphertext:</label>
          <input id="ctr-ciphertext" type="text" value={this.state.ciphertext} onChange={(e) => this.setState({ ciphertext: e.target.value })} />
        </div>
        <button onClick={this.handleDecrypt}>Decrypt</button>
        <div className="result">Decrypted Text: {this.state.decryptedText}</div>
      </div>
    );
  }
}

export default CTRMode;
