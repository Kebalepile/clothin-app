import Logo from "./components/logo.js";
import Navbar from "./components/navbar.js";
import Merch from "./components/merch.js";
import addQrCodeToWindow from "./QrCode.js";
import ScanBarCode from "./barcodeDetection.js";

window._componentState = {
  parentNode: document.querySelector("body"),
};
window.pathChanged = new Event("pathChanged");
window.addEventListener("pathChanged", (e) => {
  console.log(location.pathname);
  switch (location.pathname) {
    case "/scan.html":
    case "/cart.html":
      _componentState.parentNode.removeChild(_componentState["merch-card"]);
      break;
      default:
          break;
  }
});

window.addEventListener("load", (e) => {
  window.dispatchEvent(pathChanged);
  console.log("loading");
});
Logo();
Navbar();
Merch();
// addQrCodeToWindow();
// ScanBarCode();
