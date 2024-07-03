import { Html5QrcodeScanner} from "html5-qrcode";
import { useEffect, useState} from "react";

export const QrCodeContainer = () => {

    const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    
    const scanner  = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5,
      videoConstraints: {
        facingMode: { exact: "environment" },
    },
    }, false);

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(e) {
      console.warn(e);
    }
  }, []);

  return (
    <>
     <div className="App">
      <h1>QR Code Scanner</h1>
      {
        scanResult
        ?
        <div>Success: <a href={"http://" + scanResult}>{scanResult}</a></div>
        :
        <div id="reader">Hello</div>
      }
    </div>
    </>
  );
};










