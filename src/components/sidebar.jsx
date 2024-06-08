// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Sidebar(props) {
  const { handletoggle, data } = props;

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handletoggle}>
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </div>
    </div>
  );
}
