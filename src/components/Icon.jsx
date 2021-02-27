import React from "react";
import * as FAIcon from "react-icons/fa";

const Icon = ({ name }) => {
  const SpecificIcon = FAIcon[name];

  return <SpecificIcon />;
};

export default Icon;
