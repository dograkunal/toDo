import React from "react";

function Himanshu() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
  });

  const [kunal, setKunal] = React.useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError();
    if (handleError()) {
      console.log(data);
    } else {
      console.log("error");
    }
    console.log(data);
  };

  const handleError = () => {
    let formValid = true;
    let error = {};
    if (!data.email || data.email.length == 0) {
      formValid = false;
      error["emailRequired"] = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      error["emailRequired"] = "Invalid Email";
      formValid = false;
    }

    if (!data.name || data.name.length == 0) {
      error["nameRequired"] = "Name is required";
      formValid = false;
    } else if (data.name.length > 15) {
      error["nameRequired"] = "Length should be less than 14 character";
      formValid = false;
    }

    setKunal({ ...error });
    return formValid;
  };

  console.log(kunal);
  return (
    <form onSubmit={handleSubmit}>
      <lable>Name</lable>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleInput}
      ></input>
      <p> {kunal && kunal.nameRequired} </p>

      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleInput}
      ></input>
      <p>{kunal && kunal.emailRequired}</p>

      <button type="submit"> Submit</button>
    </form>
  );
}

export default Himanshu;
