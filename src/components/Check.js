import React, { useRef, useEffect } from "react";

function Check() {
  const kunalref = useRef(null);

  useEffect(() => {
    console.log(kunalref.current);
    kunalref.current.focus();
  });

  return (
    <div>
      <label>Enter data</label>
      <input type="text" placeholder="Input Field" ref={kunalref}></input>

      <label>Field with Reference</label>
      <input type="text" placeholder="Input Field2"></input>
    </div>
  );
}

export default Check;
