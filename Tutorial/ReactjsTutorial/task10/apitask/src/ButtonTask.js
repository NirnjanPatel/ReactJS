import React, { useEffect, useState } from "react";
import moment, { now } from "moment/moment";

const ButtonTask = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [intervalId, setIntervalId] = useState({});

  const startTimer = () => {
    setIntervalId(
      setInterval(() => {
        const now = new moment();
        const date = "Date : " + now.format("DD/MM/YY");
        const time = "Time : " + now.format("HH:mm:ss");
        setDate(date);
        setTime(time);
        setStartingTime(time);
      })
    );
  };

  useEffect(() => {
    setStartingTime(startingTime);
    console.log(startingTime);
  }, []);

  const stopTimer = () => {
    clearInterval(intervalId);
    setStartingTime(startingTime);
    console.log("startingTime = ", startingTime);
  };

  const resetTimer = () => {
    setTime(time);
    console.log("startingTime = ", startingTime);
  };
  return (
    <div class="container">
      <div class="row mt-5 m-5">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 m-5">
          <div style={{ textAlign: "center" }}>
            <p> {date}</p>
            <span> {time}</span>
          </div>
          <button
            type="button"
            class="btn btn-outline-primary m-5"
            onClick={startTimer}
          >
            Start/Pause
          </button>
          <button
            onClick={resetTimer}
            type="button"
            class="btn btn-outline-secondary m-5"
          >
            Reset
          </button>
          <button
            onClick={stopTimer}
            type="button"
            class="btn btn-outline-success m-5"
          >
            Stop
          </button>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  );
};

export default ButtonTask;
