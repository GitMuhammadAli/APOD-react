// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data?.url} alt={data?.title} className="bgimage" />
    </div>
  );
}
