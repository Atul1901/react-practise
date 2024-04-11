import React from "react";

const Count = ({ plus, minus }) => {
  const value = plus + minus;
  return <div className="value">{value}</div>;
};

export default Count;
