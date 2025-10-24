import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;

export default function TimeChallange({ title, targetTime }) {
  const timerRef = useRef();
  const dialogRef = useRef();

  console.log("timerRef", timerRef);
  const [timerStarted, setTimerStarted] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timerRef.current = setTimeout(() => {
      //   setTimerExpired(true);
      dialogRef.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
    // setTimerStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialogRef} targetTime={targetTime} result='lost' />
      <section className='challenge'>
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost!</p>} */}
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
