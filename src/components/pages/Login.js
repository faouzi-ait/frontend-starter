import React from 'react';
import { useSelector } from 'react-redux';
import { THEMES } from '../../redux/types';
import { t } from '../../i18n/translate';

import { selectedTheme } from '../../redux/selectors';

function Login() {
  const { isDark } = useSelector(selectedTheme);

  return (
    <div className={`app ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
      {/* {t('greeting')} */}
      login
    </div>
  );
}

export default Login;
