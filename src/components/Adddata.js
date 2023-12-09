"use client";

import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";

const Adddata = ({ fun }) => {
  const [title, settitle] = useState("");
  const [msg, setmsg] = useState("");
  const [status, setstatus] = useState("");
  function addData() {
    if (title.trim() !== "" && msg.trim() !== "" && status.trim() !== "") {
      // console.log(props);
      fun(title, msg, status);
      // console.log(title, msg, status);

      settitle("");
      setmsg("");
      setstatus("");
    } else {
      alert("All Fields are Required");
    }
  }
  return (
    <Card>
      <CardHeader>
        <h1>Add Data</h1>
      </CardHeader>
      <CardBody>
        {/* <form> */}
        <input
          name="title"
          placeholder="Enter Title"
          className="form-control mb-2"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Enter Message"
          className="form-control mb-2"
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
          required
        ></textarea>
        <select
          className="form-control"
          onChange={(e) => setstatus(e.target.value)}
          required
        >
          {status === "" && <option selected>Select Status</option>}

          <option value={"active"}>Active</option>
          <option value={"deactive"}>Deactive</option>
        </select>
        <button
          onClick={addData}
          className="btn btn-outline-primary w-100 mt-2"
        >
          Save
        </button>
        {/* </form> */}
      </CardBody>
    </Card>
  );
};

export default Adddata;
