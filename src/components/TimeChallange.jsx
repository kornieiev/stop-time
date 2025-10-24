import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;

export default function TimeChallange({ title, targetTime }) {
  const timerRef = useRef();
  const dialogRef = useRef();

  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  console.log("🚀 ~ TimeChallange ~ timerRemaining:", timerRemaining);

  const timerIsActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if (timerRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  }

  function handleReset() {
    setTimerRemaining(targetTime * 1000);
  }

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimerRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialogRef.current.open();
    clearInterval(timerRef.current);
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timerRemaining}
        onReset={handleReset}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost!</p>} */}
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
