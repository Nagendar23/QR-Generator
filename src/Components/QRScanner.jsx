import React, { useState, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import jsQR from "jsqr";
import "../Styles/QRScanner.css";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState("");
  const [html5QrCode, setHtml5QrCode] = useState(null);

  useEffect(() => {
    // Initialize scanner
    const scanner = new Html5Qrcode("reader");
    setHtml5QrCode(scanner);

    return () => {
      // Cleanup on unmount
      if (scanner.isScanning) {
        scanner.stop().catch(err => console.error(err));
      }
    };
  }, []);

  const startScanning = () => {
    if (!html5QrCode) return;

    html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      (decodedText) => {
        setScanResult(decodedText);
      },
      (error) => {
        console.error(error);
      }
    );
  };

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

  useEffect(() => {
    startScanning();
  }, [html5QrCode]);

  return (
    <div className="qr-scanner">
      <h2>Scan QR Code</h2>
      <div className="cam-inp">
        <div id="reader" style={{ width: "300px" }}></div>
      </div>
      <p><strong>Scanned Result:</strong> {scanResult || "No QR code detected"}</p>

      <h3>Upload QR Code Image</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default QRScanner;
