import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { THEMES } from '../../redux/types';
import { t } from '../../i18n/translate';

import { selectedTheme } from '../../redux/selectors';

import {
  register_user,
  register_user_success,
} from '../../redux/actions/register';

function Register() {
  const dispatch = useDispatch();
  const { isDark } = useSelector(selectedTheme);
  const { user, errors, registering } = useSelector((state) => state.register);
  const [password, setPassword] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !password || !surname || !email) {
      alert('Please fill in the form');
      return;
    }

    dispatch(register_user({ name, surname, email, password }));
  };

  return (
    <div className={`baseTheme app ${isDark ? THEMES.DARK : THEMES.LIGHT}`}>
      <div className="loginForm">
        <form onSubmit={onSubmit}>
          <div>
            <label>{t('username')}:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label>{t('surname')}:</label>
            <input
              type="text"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
            />
          </div>

          <div>
            <label>{t('email')}:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
          <button type="submit">
            {registering ? 'Registering...' : 'Register'}
          </button>
          <div>
            {errors &&
              errors.data &&
              errors.data.message &&
              errors.data.message}
            {user && user.message && 'Registration successful, thank you.'}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
