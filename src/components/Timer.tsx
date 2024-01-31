import React from 'react';
import './Timer.css';

interface TimerProps {
  milliSeconds: number;
  seconds: number;
  minutes: number;
}

const Timer: React.FC<TimerProps> = ({ milliSeconds, seconds, minutes }) => {
  return (
    <>
      <h1 className="title">Timer</h1>
      <div className="timer-container">
        <div className="d-flex flex-column">
          <label>Min</label>
          <input value={minutes} />
        </div>
        <div className="d-flex flex-column">
          <label>Sec</label>
          <input value={seconds} />
        </div>
        <div className="d-flex flex-column">
          <label>Milli Sec</label>
          <input value={milliSeconds} />
        </div>
      </div>
    </>
  );
};

export default Timer;
