import React, { useState, useEffect } from "react";
import "../Styles/QRHistory.css";

const QRHistory = () => {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("qrHistory")) || []
  );

  useEffect(() => {
    localStorage.setItem("qrHistory", JSON.stringify(history));
  }, [history]);

  return (
    <div className="qr-history">
      <h2>Scan History</h2>
      <ul>
        {history.length > 0 ? (
          history.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No history available</p>
        )}
      </ul>
    </div>
  );
};

export default QRHistory;
