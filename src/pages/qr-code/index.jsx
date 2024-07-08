import { Html5QrcodeScanner, Html5Qrcode} from "html5-qrcode";
import { useEffect, useState} from "react";

export const QrCodeContainer = () => {

  const [scanResult, setScanResult] = useState(null);

  const qrCodeSuccessCallback = (decodedText) => {
    console.log("Function successCallback is called successfully " + decodedText);
    scanner.clear();
    setScanResult(decodedText);
  };
  
  useEffect(() => {
    
    const scanner  = new Html5Qrcode('reader');

    const config = {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5,
    }

   

    scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);


    // function success(result) {
    //   scanner.clear();
    //   setScanResult(result);
    // }

    // function error(e) {
    //   console.warn(e);
    // }
  }, []);

  return (
    <>
    <div id="reader" width="600px"></div>
     <div className="App">
      <h1>QR Code Scanner</h1>
      {
        scanResult
        ?
        <div>Success: {scanResult}</div>
        :
        <div id="reader">Hello</div>
      }
    </div>
    </>
  );
};










