import React from "react";
import { useState } from "react";

function Validation() {
  const intialvalue = () => {
    const value = "Male";
    return value;
  };

  const [value, setValue] = useState(intialvalue);

  const [logicerr, setlogicerr] = useState({
    lessThan: "",
    moreThan: "",
  });

  const handlegender = (e) => {
    console.log(value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.value);
  };

  const handleName = (e) => {
    const newname = e.target.value;
    if (newname.length > 16) {
      setlogicerr({
        ...logicerr,
        moreThan: "Should be 15 Character or Less ",
      });
    } else {
      setlogicerr({ ...logicerr, moreThan: "" });
    }
  };

  const handleage = (e) => {
    const numage = +e.target.value;
    if (numage < 13) {
      setlogicerr({ ...logicerr, lessThan: "Age Should be more than 12!" });
    } else {
      setlogicerr({ ...logicerr, lessThan: "" });
    }
  };

  return (
    <div className="maform">
      <form className="formcl" onSubmit={handleSubmit}>
        <h1>Submition Form </h1>
        <div>
          <p className="fields">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleName}
          />
          <h6 className="errorlogic">{logicerr && logicerr.moreThan}</h6>
        </div>
        <div>
          <p className="fields">Email</p>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <p className="fields">Age</p>
          <input
            type="number"
            placeholder="Enter your age"
            onChange={handleage}
          />
          <h6 className="errorlogic">{logicerr && logicerr.lessThan}</h6>
        </div>
        <p className="fields">Gender</p>
        <select value={value} onChange={handlegender}>
          <option value="Male">MALE</option>
          <option value="Female">FEMALE</option>
          <option value="Others">OTHERS</option>
        </select>
        <div>
          <button type="submit" id="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Validation;
