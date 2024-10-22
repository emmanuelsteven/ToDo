import React from "react";

const CurrentDateInfo = () => {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = now.toLocaleDateString(undefined, options); // Auto-detects user's locale

  return <div className="date-info">{formattedDate}</div>;
};

export default CurrentDateInfo;
