import React from "react";
import { useState } from "react";

function Validation3() {
  const intialvalue = () => {
    const value = "Male";
    return value;
  };
  const [value, setValue] = useState(intialvalue);
  //for gender change

  const [data, setData] = useState({
    newName: "",
    numAge: "",
    email: "",
  }); //for Data

  const [logicerr, setlogicerr] = useState({
    lessThan: "",
    moreThan: "",
    mail: "",
  }); //for Errors

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
    setData({ ...data, newName: e.target.value });
    check(e);
    // console.log(data);
  };

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
    check(e);
  };

  const handleage = (e) => {
    setData({ ...data, numAge: +e.target.value });
    check(e);
    // console.log(data)
  };

  const check = () => {
    if (!data.newName) {
      setlogicerr({ ...logicerr, moreThan: "Required" });
    } else if (data.newName.length > 15) {
      setlogicerr({ ...logicerr, moreThan: "must be 15 or less" });
      console.log(data);
    } else {
      setlogicerr({ ...logicerr, moreThan: "" });
    }

    if (!data.numAge) {
      setlogicerr({ ...logicerr, lessThan: "Required" });
    } else if (data.numAge < 13) {
      setlogicerr({ ...logicerr, lessThan: "Age Should be more than 12!" });
    } else {
      setlogicerr({ ...logicerr, lessThan: " " });
    }

    if (!data.email) {
      setlogicerr({ ...logicerr, mail: "Required" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      setlogicerr({ ...logicerr, mail: "Enter Valid Email" });
    } else {
      setlogicerr({ ...logicerr, mail: "" });
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
            value={data.newName}
            onChange={handleName}
          />
          <h6 className="errorlogic">{logicerr && logicerr.moreThan}</h6>
        </div>
        <div>
          <p className="fields">Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleEmail}
          />
          <h6 className="errorlogic">{logicerr && logicerr.mail}</h6>
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

export default Validation3;
