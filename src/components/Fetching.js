import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetching() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((e) => {
        setItem(e.data);
        console.log(e);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        {item.map((res) => (
          <h1 className="card" key={res.id}>
            <h3> Name: {res.name} </h3>

            <h4> Username: {res.username} </h4>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Fetching;
