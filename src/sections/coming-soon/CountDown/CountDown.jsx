import { useState, useRef, useEffect } from "react";

const CountDown = () => {
  const [countDays, setCountDays] = useState("00");
  const [countHours, setCountHours] = useState("00");
  const [countMinutes, setCountMinutes] = useState("00");
  const [countSeconds, setCountSeconds] = useState("00");

  let interval = useRef();
  const startTimer = ({ yearTrget, monthTrget, dayTrget }) => {
    const countdowndate = new Date(
      `${yearTrget},${monthTrget},${dayTrget},  00:00:00`
    ).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdowndate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        //update Timer
        setCountDays(days);
        setCountHours(hours);
        setCountMinutes(minutes);
        setCountSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    let intervalClean = interval.current;
    startTimer({ yearTrget: "2023", monthTrget: "12", dayTrget: "29" });
    return () => {
      clearInterval(intervalClean);
    };
  });
  return (
    <span id="clock">
      <span className="counter-item">
        {countDays} <span className="counter-postfixer">Days</span>
      </span>
      :
      <span className="counter-item">
        {countHours}
        <span className="counter-postfixer">Hours</span>
      </span>
      :
      <span className="counter-item">
        {countMinutes} <span className="counter-postfixer">Minutes</span>
      </span>
      :
      <span className="counter-item">
        {countSeconds} <span className="counter-postfixer">Seconds</span>
      </span>
    </span>
  );
};

export default CountDown;
