import React from "react";

const Navbar = ({ name }) => {
  return <div className="navbar">Hello {name?.toUpperCase()} !</div>;
};

export default Navbar;
