import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export default function App() {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(0);
  if (count < 1) {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setdata([...data, ...res.data]);
    });
    setcount(1);
  }

  return (
    <div>
      {data.map(datab => (
        <div className="hello" key={datab.id}>
          <section style={{ width: "70%", position: "relative" }}>
            <p>Name : {datab.name}</p>
            <p>E-mail : {datab.email}</p>
            <p>Phone No. : {datab.phone}</p>
            <p>
              Address : {datab.address.street}, {datab.address.suite},{" "}
              {datab.address.city}, {datab.address.zipcode}{" "}
            </p>
            <p>
              Website : <a href={datab.website}>{datab.website}</a>
            </p>
            <p>Company : {datab.company.name}</p>
          </section>
          <section
            style={{
              width: "30%",
              position: "relative"
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                position: "absolute",
                top: "50%",
                right: "0px",
                transform: "translateY(-50%)",
                maxHeight: "80%",
                margin: "10px"
              }}
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
          </section>
        </div>
      ))}
    </div>
  );
}
