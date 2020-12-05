import React from 'react';
import { useSelector } from 'react-redux';
import { THEMES } from '../../redux/types';
import { t } from '../../i18n/translate';

import { selectedTheme } from '../../redux/selectors';

function Register() {
  const { isDark } = useSelector(selectedTheme);

  return (
    <div className={`app ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
      {/* {t('greeting')} */}
      register
    </div>
  );
}

export default Register;
