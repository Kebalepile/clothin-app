export default () => {
  // replace h1 with svg
  const logo = document.createElement("h1");
  logo.setAttribute("id", "logo");
  logo.textContent = "LOGO";
  logo.addEventListener("click", e => {
    // redirect to homepage on final product.
    
    // document.location.assign(document.origin);
   if(location.pathname !== "/"){
    document.location.assign("/");
   }
  })
  document.body.appendChild(logo);
};
