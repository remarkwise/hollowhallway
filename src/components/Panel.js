import { useState } from "react";
import "../css/Panel.css";

const Panel = ({ content = "", position = "tr", ...props }) => {
  let PanelCss = "panel " + position;
  if (props.on) {
    PanelCss += " on";
  }
  return (
    <div className={PanelCss}>
      <span className="close"></span>
      {content}
    </div>
  );
};
export default Panel;
