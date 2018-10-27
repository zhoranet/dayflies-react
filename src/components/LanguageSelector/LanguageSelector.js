import React from "react";

import classes from "./LanguageSelector.module.scss";

const languageSelector = props => {
  const languageItems = ["English", "French"].map(x => <option>{x}</option>);
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      <select className={classes.Select} onChange={props.changed}>
        {languageItems}
      </select>
    </div>
  );
};

export default languageSelector;
