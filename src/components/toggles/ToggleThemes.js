import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { t } from '../../i18n/translate';

import { switchTheme } from '../../redux/actions/theme';
import { selectedTheme } from '../../redux/selectors';

import sun from '../../images/sun.svg';
import night from '../../images/night.svg';

function ToggleThemes() {
  const dispatch = useDispatch();
  const { isDark } = useSelector(selectedTheme);

  return (
    <button onClick={() => dispatch(switchTheme())} className="theme">
      <img
        src={isDark ? night : sun}
        alt={isDark ? 'dark' : 'light'}
        width="10"
      />
    </button>
  );
}

export default ToggleThemes;
