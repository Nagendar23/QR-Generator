import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../Styles/QRGenerator.css";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [errorCorrection, setErrorCorrection] = useState("M");

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="qr-generator">
      <h2>QR Code Generator</h2>
      
      <div>
        <label>Enter text or URL</label>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <label>Size</label>
        <input
          type="number"
          min="100"
          max="500"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Error Correction</label>
        <select
          value={errorCorrection}
          onChange={(e) => setErrorCorrection(e.target.value)}
        >
          <option value="L">Low</option>
          <option value="M">Medium</option>
          <option value="Q">Quartile</option>
          <option value="H">High</option>
        </select>
      </div>

      <QRCodeCanvas value={text || "QR Code"} size={size} level={errorCorrection} />
      <br />
      <button onClick={downloadQR}>Download QR</button>
    </div>
  );
};

export default QRGenerator;
