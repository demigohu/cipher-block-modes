// src/CipherBlockModes.js
import React from 'react';
import ECBMode from './ECBMode';
import CBCMode from './CBCMode';
import CTRMode from './CTRMode';

function CipherBlockModes() {
  return (
    <div>
      <ECBMode />
      <CBCMode />
      <CTRMode />
    </div>
  );
}

export default CipherBlockModes;
