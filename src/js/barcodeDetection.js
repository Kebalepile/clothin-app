import captureImage from "./media.js";
 
export default async function ScanBarCode() {
  try {
    //  check browser support.
    if (!("BarcodeDetector" in window)) {
      alert("You're Browser does not support BarCode detection. 😔");
      return;
    }
    var formats = await BarcodeDetector.getSupportedFormats();

    if (formats.includes("qr_code")) {
      // create new detector.
    //   console.log(formats)
      console.log("BarcodeDetector Supported 😍");
      let scanner = new BarcodeDetector({ formats: ["qr_code"] });
     
      captureImage(scanner);
    } else {
      console.log("required format is not supported by BarcodeDetector 😔");
      return;
    }
  } catch (err) {
    console.error(err);
  }
}


