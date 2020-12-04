import React from "react";
import { LOCALES } from "../../i18n/constants";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/actions/set_language";

function ToggleLanguage() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setLanguage(LOCALES.ENGLISH))}>
        English
      </button>
      <button onClick={() => dispatch(setLanguage(LOCALES.FRENCH))}>
        French
      </button>
    </div>
  );
}

export default ToggleLanguage;
