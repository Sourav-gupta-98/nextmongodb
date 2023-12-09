"use client";
import React from "react";

const Delete = ({ del1, title }) => {
  function del() {
    del1(title);
  }
  return (
    <button className="btn btn-sm btn-outline-danger" onClick={del}>
      Delete
    </button>
  );
};

export default Delete;
