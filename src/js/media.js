import displayBarCode from "./displayQrCode.js";
import qrCodeScanner from "./barcodeDetection.js";
async function getMedia(
  options = { audio: false, video: { facingMode: { exact: "environment" } } }
) {
  // facingMode can be : environment or user [for front carmera]
  try {
    const stream = await navigator.mediaDevices.getUserMedia(options);
    return stream;
  } catch (err) {
    console.log(`Bothata ke bo: ${err}`);
  }
}
// @description extracts QrCode from taken Image
// @ parameters Object
async function captureBarCode(imgCapture) {
  try {
    if (imgCapture) {
      const imgBitMap = await imgCapture.grabFrame();
      return imgBitMap;
    }
  } catch (err) {
    console.error(err);
  }
}

// @ discription: connects HTML Elements to relative Js bits.
export default async function captureImage(scanner) {
  try {
    const mediaStream = await getMedia();
    const video = document.querySelector("section#qrcodescanner > video");
    video.srcObject = mediaStream;
    video.play();

    let intervalID = setInterval(async () => {
      try {
        let track = mediaStream.getVideoTracks()[0],
          imgCapture = new ImageCapture(track),
          imgBitMap = await captureBarCode(imgCapture),
          detectedBarCodes = await scanner.detect(imgBitMap);
          let tag = document.createElement("p");
          tag.id = "qrcodedata";
        if (detectedBarCodes.length != 0) {
          let barcode = detectedBarCodes[0];
          console.log(barcode)
            tag.textContent =`qrCode value is: ${ barcode.rawValue}`;
            document.querySelector("#qrcodes").appendChild(tag);
        
            displayBarCode(barcode);
          disableStream(video.srcObject, video);
          clearInterval(intervalID);
        }
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  } catch (err) {
    console.error(err);
  }
}

function disableStream(stream, videoElem) {
  if (stream.active) {
    let tracks = stream.getVideoTracks();
    tracks.forEach((track) => track.stop());
    videoElem.srcObject = null;

    let btn = document.querySelector("#scanQrCode");
    btn.style.display = "inline-block";

    let cb = (e) => {
      btn.style.display = "none";
      let parentNode = document.querySelector("#qrcodes");
      while(parentNode.hasChildNodes()){
        parentNode.removeChild(parentNode.firstChild);
      }
      btn.removeEventListener('click',cb);
      qrCodeScanner();
    };
    btn.addEventListener("click", cb);
    return;
  }
}
