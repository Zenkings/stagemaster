import React, { useEffect, useState } from "react";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex gap-4">
      <p className="display-6 fw-bold fixed-width-time">
        {dateTime.toLocaleTimeString()}
      </p>
      <p className="lead fixed-width-date">
        {dateTime.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default Clock;
