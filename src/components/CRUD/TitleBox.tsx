import React from "react";

export default function TitleBox({ getNotes }) {
  return (
    <div className="header__title_box">
      <h1 className="header__title">Notes</h1>
      <button className="byn__reboot btn" onClick={getNotes}>
        <span className="update"></span>
      </button>
    </div>
  );
}
