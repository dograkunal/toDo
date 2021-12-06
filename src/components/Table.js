import React, { useContext } from "react";
import { myContext } from "../components/ToDo.js";

function Table() {
  const User = useContext(myContext);

  return <div>{User}</div>;
}

export default Table;
