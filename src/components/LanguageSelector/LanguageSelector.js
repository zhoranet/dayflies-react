import React from "react";

import classes from "./LanguageSelector.module.scss";

const languageSelector = props => {
  
    const languageItems = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" }
  ].map(x => <option key={x.code} value={x.code}>{x.name}</option>);

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
