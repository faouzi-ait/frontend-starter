import React from 'react';
import ToggleLanguage from './components/toggles/ToggleLanguage';
import ToggleTheme from './components/toggles/ToggleThemes';
import Provider from './i18n/Provider';

import { useSelector } from 'react-redux';
import { t } from './i18n/translate';

import { selectedLanguage, selectedTheme } from './redux/selectors';

import { THEMES } from './redux/types';

import './sass/main.scss';

function App() {
  const language = useSelector(selectedLanguage);
  const { isDark } = useSelector(selectedTheme);

  return (
    <Provider locale={language}>
      <div className={`app ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
        <ToggleLanguage />
        <ToggleTheme />
        {t('greeting')}
      </div>
    </Provider>
  );
}

export default App;
