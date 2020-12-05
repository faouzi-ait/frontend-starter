import React from 'react';
import ToggleLanguage from '../toggles/ToggleLanguage';
import ToggleTheme from '../toggles/ToggleThemes';

function Toggles() {
  return (
    <div style={{ position: 'absolute', right: 0 }}>
      <ToggleLanguage />
      <ToggleTheme />
    </div>
  );
}

export default Toggles;
