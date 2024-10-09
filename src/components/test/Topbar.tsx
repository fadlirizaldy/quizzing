import React, { useEffect, useState } from "react";

const Topbar = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const endTime = Date.now() + timeLeft * 1000; // 10 minutes from now

    const interval = setInterval(() => {
      const currentTime = Math.max(
        0,
        Math.floor((endTime - Date.now()) / 1000)
      );
      setTimeLeft(currentTime);

      if (currentTime === 0) {
        clearInterval(interval); // clear interval when countdown reaches 0
      }
    }, 1000);

    return () => clearInterval(interval); // cleanup the interval on component unmount
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <div className="h-14 border border-b-2 flex items-center justify-center">
      <h4 className="font-medium text-lg">{formattedTime}</h4>
    </div>
  );
};

export default Topbar;
