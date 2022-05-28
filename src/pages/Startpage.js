import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Startpage() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handleChange = (v, k) => {
    setData({ ...data, [k]: v });
  };
  const handleChange1 = () => {
    navigate("/assessment");
  };
  return (
    <div className="App">
      <a href="https://master.d378gmn9ahk7zs.amplifyapp.com/">
        <div className="main">
          <h5>Back to Voice Assistant</h5>
          <img
            className="gif"
            src={require("../assets/back.gif")}
            alt="loading..."
          />
        </div>
      </a>
      <div className="main_question">
        <h2 className="head">Start Assessment</h2>
        <h3>Choose Your Assessment Question bank</h3>
        <div class="form-group">
          <select
            class="form-control"
            value={data.type || ""}
            onChange={(e) => {
              handleChange(e.target.value, "type");
            }}
          >
            <option value="" disabled>
              Select Question Bank Type
            </option>
            <option value="H-1">H-1</option>
            <option value="H-2">H-2</option>
            <option value="H-3">H-3</option>
            <option value="H-4">H-4</option>
            <option value="H-5">H-5</option>
          </select>
          <div onClick={handleChange1()}></div>
        </div>
      </div>
    </div>
  );
}

export default Startpage;
