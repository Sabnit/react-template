import { useEffect, useState } from 'react';
import Timer from './Timer';
import './Clock.css';

interface ClockProps {}

const Clock: React.FC<ClockProps> = () => {
  const [minutes, setMinutes] = useState(6);
  const [seconds, setSeconds] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        if (milliSeconds > 0) {
          setMilliSeconds((milliSeconds) => milliSeconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliSeconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        }
      });
    }
    return () => clearInterval(interval);
  }, [milliSeconds, seconds, minutes, isRunning]);

  function startTimer() {
    if (minutes !== 0 || seconds !== 0 || milliSeconds !== 0) {
      setIsRunning(true);
    }
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setMilliSeconds(0);
    setSeconds(0);
    setMinutes(6);
  }

  return (
    <>
      <Timer milliSeconds={milliSeconds} seconds={seconds} minutes={minutes} />
      <div className="button-container">
        {!isRunning && (
          <button className="btn" onClick={startTimer}>
            Start
          </button>
        )}

        {''}
        <button className="btn" onClick={stopTimer}>
          Stop
        </button>
        <button className="btn" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Clock;
