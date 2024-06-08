// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Footer(props) {
  const { showModal, handletoggle, data } = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>{data?.explanation}</h1>
      </div>
      <button onClick={handletoggle}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
