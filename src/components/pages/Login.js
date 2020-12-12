import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { THEMES } from '../../redux/types';
import { t } from '../../i18n/translate';

import { selectedTheme } from '../../redux/selectors';

import {
  login_user_action,
  logout,
  setAuthenticationError,
} from '../../redux/actions/login';

// import '../../sass/index.scss';

function Login() {
  const dispatch = useDispatch();
  const { isDark } = useSelector(selectedTheme);
  const { authenticating, loggedIn, errors } = useSelector(
    (state) => state.login
  );

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) alert('Please fill in the form');

    const payload = {
      email: username,
      password,
    };
    dispatch(login_user_action(payload));
  };

  return (
    <div className={`baseTheme app ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
      <div className="loginForm">
        <form onSubmit={onSubmit}>
          <div>
            <label>{t('username')}:</label>
            <input
              type="email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label>{t('password')}:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {!loggedIn && (
            <button type="submit">
              {authenticating ? 'Logging in...' : 'Login'}
            </button>
          )}
          <span>
            {errors &&
              errors.data &&
              errors.data.message &&
              errors.data.message}
          </span>
          {loggedIn && (
            <button onClick={() => dispatch(logout())}>logout</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
