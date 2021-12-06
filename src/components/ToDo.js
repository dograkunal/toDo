import React, { useState, useEffect } from "react";
import { useRef } from "react";
// import Table from "../components/Table.js";

// export const myContext = React.createContext();

function ToDo() {
  const initial = { text1: "", text2: "" };
  const sref = useRef();
  const [newarr, setNew] = useState([]);
  //   const [naruto, setNaruto] = useState();
  const [task, setTask] = useState(initial);
  //   const [label, setLabel] = useState();

  //   useEffect(() => {
  //     sref.current.focus();
  //   }, []);

  const data = () => {
    const payload = task;
    //  (newarr && newarr.length)
    setNew([...newarr, { payload }]);
    //   console.log(newarr);
    // } else {
    //   setNewarr([{payload }]);
    // }
    setTask(initial);
  };

  const taskChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    // debugger;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setNew([...newarr, { task }]);
    console.log(newarr);
    // setNewarr([...newarr, { task }]);
  };

  return (
    <form className="formback">
      <div className="task">
        <label>Input Task: </label>
        <input
          type="text"
          placeholder="Input Task"
          name="text1"
          value={task.text1}
          onChange={taskChange}
          ref={sref}
        ></input>
      </div>

      <div className="label">
        <label>Task label: </label>
        <input
          type="text"
          placeholder="Task Name"
          name="text2"
          value={task.text2}
          onChange={taskChange}
        ></input>
      </div>
      <div>
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
    /* <myContext.Provider value={task.text1}>
        <Table />
      </myContext.Provider> */
  );
}

export default ToDo;
