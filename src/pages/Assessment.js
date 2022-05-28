import "../App.css";
import React, { useState, useEffect } from "react";
import { API_ADMIN_URL, SHAKTHI_QUESTION_API } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";

function Assessment() {
  const [responseData, setResponseData] = useState([]);
  const [count, setCount] = useState(0);
  const ShakthiQuestion = () => {
    console.log(`${API_ADMIN_URL}${SHAKTHI_QUESTION_API}`);
    const ShakthiQuestning = {
      collectiontypedata: "voice_assessment_question",
    };
    axios
      .post(`${API_ADMIN_URL}${SHAKTHI_QUESTION_API}`, ShakthiQuestning)
      .then((res) => {
        setResponseData(res.data.data);
        console.log("====pppppp====", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    ShakthiQuestion();
  }, []);
  let element = responseData[count] || {};
  const incrementNextQuestion = () => {
    if (count === responseData.length - 1) {
      setOpen(handleOpen);
    } else {
      setCount(count + 1);
    }
  };
  const filterType = responseData.filter((element) =>
    element?.type?.includes((element = "H-5"))
  );

  // const first = 0;
  // const second = 1;
  // const third = 2;
  // const fourth = 3;

  const [firstanswer, setfirstanswer] = useState(0);
  const [secondanswer, setsecondanswer] = useState(1);
  const [thirdanswer, setthirdanswer] = useState(2);
  const [fourthanswer, setfourthanswer] = useState(3);

  console.log("needhelp", setfirstanswer);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <Link to="/">
        <div className="main">
          <h5>Back to Voice Assistant</h5>
          <img
            className="gif"
            src={require("../assets/back.gif")}
            alt="loading..."
          />
        </div>
      </Link>
      <div className="main_question">
        <h2 className="head">Your Self Assessment</h2>

        <h3 className="question">{element.ques}</h3>
        <div className="video-question">
          <ul>
            <li>
              (a) &nbsp;
              <button
                className="btn spr-btn"
                onClick={(firstanswer) => setfirstanswer(firstanswer)}
              >
                {element.ans1}
              </button>
            </li>
            <li>
              (b) &nbsp;
              <button
                onChange={(secondanswer) => setsecondanswer(secondanswer)}
                className="btn spr-btn"
              >
                {element.ans2}
              </button>
            </li>
            <li>
              (c) &nbsp;
              <button
                onChange={(thirdanswer) => setthirdanswer(thirdanswer)}
                className="btn spr-btn"
              >
                {element.ans3}
              </button>
            </li>
            <li>
              (d) &nbsp;
              <button
                onChange={(fourthanswer) => setfourthanswer(fourthanswer)}
                className="btn spr-btn"
              >
                {element.ans4}
              </button>
            </li>
          </ul>
          <button
            className="ctn-btn btn btn-web cnt-btn hvr-float-shadow"
            onClick={() => incrementNextQuestion()}
          >
            Continue
          </button>
          {/* modal */}
        
          <Modal
            onClose={handleClose}
            open={open}
            style={{
              position: "absolute",
              backgroundColor: "white",
              boxShadow: "2px solid black",
              height: 340,
              width: 480,
              margin: "auto",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginTop: "70px",
              }}
            >
              <h1
                style={{
                  fontSize: "55px",
                }}
              >
                &#128515;
              </h1>
              <h1>Your Score is 8</h1>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
