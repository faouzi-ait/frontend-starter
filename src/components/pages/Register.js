import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { THEMES } from '../../redux/types';
import { t } from '../../i18n/translate';

import { selectedTheme } from '../../redux/selectors';

function Register() {
  const { isDark } = useSelector(selectedTheme);
  const [password, setPassword] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !password || !surname || !email)
      alert('Please fill in the form');
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
