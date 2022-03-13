import displayBarCode from "./displayQrCode.js";

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
    //    remove later.
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    const btn = document.createElement("button");
    btn.textContent = "scan";
    btn.addEventListener("click", async (e) => {
      console.log("clicked");
      try {
        const imgBitMap = await captureBarCode(imgCapture);
        const detectedBarCodes = await scanner.detect(imgBitMap);
        console.dir(detectedBarCodes);
        if (detectedBarCodes.length != 0) {
          detectedBarCodes.forEach((barcode) => displayBarCode(barcode));
        }
      } catch (err) {
        console.error(err);
      }
    });
    document.body.appendChild(btn);
    // remove later.
    const track = mediaStream.getVideoTracks()[0];
    const imgCapture = new ImageCapture(track);
  } catch (err) {
    console.error(err);
  }
}
