import React from 'react';
import { LOCALES } from '../../i18n/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/actions/language';

function ToggleLanguage() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);

  console.log(language);

  return (
    <>
      <button
        onClick={() => dispatch(setLanguage(LOCALES.ENGLISH))}
        className="theme">
        EN
      </button>
      <button
        onClick={() => dispatch(setLanguage(LOCALES.FRENCH))}
        className="theme">
        FR
      </button>
    </>
  );
}

export default ToggleLanguage;
