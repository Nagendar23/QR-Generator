import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import jsQR from "jsqr";
import "../Styles/QRScanner.css";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, canvas.width, canvas.height);

        if (code) {
          setScanResult(code.data);
        } else {
          setScanResult("No QR code detected in image");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="qr-scanner">
      <h2>Scan QR Code</h2>
      <div className="cam-inp">
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setScanResult(result.text);
          }
        }}
        constraints={{ facingMode: "environment" }}
        style={{ width: "300px" }}
      />
      </div>
      <p><strong>Scanned Result:</strong> {scanResult || "No QR code detected"}</p>

      <h3>Upload QR Code Image</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default QRScanner;
