import React, { useEffect, useRef, useState } from "react";

const Text = () => {
  return <h1>5 sec reached </h1>;
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const [displayText, setDisplayText] = useState(false);
  let timer = useRef(null);

  useEffect(() => {
    if (!displayText) {
      timer.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [displayText]);

  useEffect(() => {
    if (time === 5) {
      setDisplayText(true);
    }
  }, [time]);

  return (
    <div>
      <div>{!displayText ? <h1>Timer count: {time}</h1> : <Text />}</div>
    </div>
  );
};

export default React.memo(Timer);
