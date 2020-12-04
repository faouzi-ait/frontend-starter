import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { t } from '../../i18n/translate';

import { switchTheme } from '../../redux/actions/themeAction';
import { selectedTheme } from '../../redux/selectors';

import { THEMES } from '../../redux/types';

function ToggleThemes() {
  const dispatch = useDispatch();
  const { isDark } = useSelector(selectedTheme);

  return (
    <button onClick={() => dispatch(switchTheme())}>
      {!isDark ? THEMES.DARK : THEMES.LIGHT}
    </button>
  );
}

export default ToggleThemes;
