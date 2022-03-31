import css from "./css.js";
const template = document.createElement("template");
template.innerHTML = `
${css()}
<ul id="sidebar">
    <li id="home">

        <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"
            xml:space="preserve">
            <g id="icon">
                <path d="M10,20v-6h4v6h5v-8h3L12,3,2,12h3v8z" fill="#2196F3" />
            </g>
        </svg>
    </li>
    <li id="contact">

        <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"
            xml:space="preserve">
            <g id="icon">
                <path
                    d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99,-0.9,1.99,-2L24,5c0,-1.1,-0.9,-2,-2,-2zM8,6c1.66,0,3,1.34,3,3s-1.34,3,-3,3,-3,-1.34,-3,-3,1.34,-3,3,-3zm6,12H2v-1c0,-2,4,-3.1,6,-3.1s6,1.1,6,3.1v1zm3.85,-4h1.64L21,16l-1.99,1.99c-1.31,-0.98,-2.28,-2.38,-2.73,-3.99,-0.18,-0.64,-0.28,-1.31,-0.28,-2s0.1,-1.36,0.28,-2c0.45,-1.62,1.42,-3.01,2.73,-3.99L21,8l-1.51,2h-1.64c-0.22,0.63,-0.35,1.3,-0.35,2s0.13,1.37,0.35,2z"
                    fill="#2196F3" />
            </g>
        </svg>

    </li>
    <li id="about">
        <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"
            xml:space="preserve">
            <g id="icon">
                <path
                    d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10,-4.48,10,-10S17.52,2,12,2zm1,15h-2v-6h2v6zm0,-8h-2V7h2v2z"
                    fill="#2196F3" />
            </g>
        </svg>
    </li>
    <li id="scanProduct">
        <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
            xml:space="preserve">
            <g id="icon">
                <path
                    d="M28.585,29.5H3.415c-0.505,0,-0.915,-0.41,-0.915,-0.915V3.415C2.5,2.91,2.91,2.5,3.415,2.5h25.17c0.505,0,0.915,0.41,0.915,0.915v25.17C29.5,29.09,29.09,29.5,28.585,29.5z"
                    fill="#FFFFFF" stroke="#053D6A" stroke-width="1" stroke-miterlimit="1" />
                <path d="M4,4v7h7V4H4zM10,10H5V5h5V10zM9,9H6V6h3V9z" fill="#0C83E1" />
                <path d="M4,21v7h7v-7H4zM10,27H5v-5h5V27zM9,26H6v-3h3V26z" fill="#0C83E1" />
                <path d="M21,4v7h7V4H21zM27,10h-5V5h5V10zM26,9h-3V6h3V9z" fill="#0C83E1" />
                <path
                    d="M14,4v4h-2V4H14zM20,6V4h-2h-0.5h-1.5v4h-2v4h2v-2h1.5h0.5h2V8h-2V6H20zM10,14H8v-2h2V14zM24,12h-2v2h2V12zM28,14h-2v2h2V14zM22,16v-2h-2v2H22zM14,16v-2v-2h-2v2h-2v2v2h2v-2H14zM8,14H6v-2H4v2v2h2v2h2v-2V14zM24,16h-2v2v2h-2v2v2h2v2v2h2v-2h2v2h2v-2v-2v-2h-2v2h-2v-2h2v-2h-2v-2h2v-2H24zM28,20v-2h-2v2H28zM18,20h2v-2v-2h-2v-2h2v-2h-2h-2v2v2v2h2V20zM8,20h2v-2H8V20zM4,20h2v-2H4V20zM16,24v-2h2v-2h-2v-2h-2h-2v2h2v2h-2v2v2h2v-2H16zM16,24v2h2v2h2v-2v-2h-2H16zM14,28h2v-2h-2V28z"
                    fill="#0C85E5" />
            </g>
        </svg>
    </li>
</ul>

<ul id="navbar">
   
    <li id="menu">

        <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
            xml:space="preserve">
            <g id="icon">
                <line x1="4" y1="15.5" x2="28" y2="15.5" fill="none" stroke="#005170" stroke-width="1"
                    stroke-miterlimit="5" />
                <line x1="4" y1="7.5" x2="28" y2="7.5" fill="none" stroke="#005170" stroke-width="1"
                    stroke-miterlimit="5" />
                <line x1="4" y1="23.5" x2="28" y2="23.5" fill="none" stroke="#005170" stroke-width="1"
                    stroke-miterlimit="5" />
            </g>
        </svg>
    </li>
    <li id="search">
        <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
            xml:space="preserve">
            <g id="icon">
                <path
                    d="M19.974,22.54c-5.814,0,-10.526,-4.71,-10.526,-10.52S14.16,1.5,19.974,1.5S30.5,6.21,30.5,12.02S25.787,22.54,19.974,22.54zM1.6,30.4l10.861,-10.861"
                    fill="white" stroke="#0C82E0" stroke-width="1" stroke-miterlimit="5" />
            </g>
        </svg>
    </li>
    <li id="cart">
        <svg version="1.1" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32"
            enable-background="new 0 0 32 32" xml:space="preserve">
            <g id="icon">
                <polygon points="30.3,9.5 6.7,9.5 9.7,21.5 26,21.5" fill="#FFFFFF" stroke-linejoin="miter" />
                <path d="M1,3.5h4.261l4.394,18H26.06l4.236,-12H10" fill="none" stroke="#0C82E0" stroke-width="1"
                    stroke-miterlimit="1" />
                <path
                    d="M12.015,23.551c1.649,0,2.985,1.336,2.985,2.985s-1.336,2.985,-2.985,2.985S9.03,28.184,9.03,26.536S10.366,23.551,12.015,23.551zM21.03,26.536c0,1.649,1.336,2.985,2.985,2.985c1.649,0,2.985,-1.336,2.985,-2.985s-1.336,-2.985,-2.985,-2.985C22.366,23.551,21.03,24.887,21.03,26.536z"
                    fill="#FFFFFF" stroke="#053D6A" stroke-width="1" stroke-miterlimit="1" />
            </g>
        </svg>
    </li>
</ul>
<section id="about-us" class="info-card">
    <p>
        <b>About Us</b>
        <br><br />
        <!-- add proper information on final Web Application. -->
        Sit in aliqua exercitation voluptate.
        Tempor magna aute et nisi. Dolor voluptate do mollit excepteur et ex.
        Dolor in veniam ut minim nisi commodo aute.
    </p>

    <button>Close</button>
    <br />
    <span style="font-size:12px;">Copyright @ K.T Motshoana 2022</span>
</section>

<section id="contact-us" class="info-card">
    <p><b>Contact Us</b> </p>
    
    <a href="mailto: Email: pimpabutterfly86@gmail.com" target="_blank">
        Email
        <svg x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16"
            xml:space="preserve">
            <g id="icon">
                <path d="M1.5,10h1.5v1H1.5V10zM1,8h2v1H1V8zM0.5,6h2.5v1H0.5V6zM0,4h3v1H0L0,4z" fill="#A0519F" />
                <path d="M4.5,12.5h11V3.5H4.5V12.5z" fill="#F7DA8E" stroke="#E57428" stroke-width="1"
                    stroke-linecap="round" stroke-miterlimit="1" />
                <polyline points="15.5,3.746 10,8.25 4.5,3.746" fill="none" stroke="#E57428" stroke-width="1"
                    stroke-linecap="round" stroke-miterlimit="1" stroke-linejoin="miter" />
            </g>
        </svg>

    </a>

    <a href="https://wa.me/<number>" target="_blank">
        WhatsApp
        <svg x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16"
            xml:space="preserve">
            <g id="icon">
                <path
                    d="M15.5,7.873c0,4.072,-3.358,7.373,-7.5,7.373c-1.294,0,-2.512,-0.322,-3.574,-0.889C3.862,14.458,0.7,15.3,0.7,15.3s0.731,-2.673,0.96,-3.486C0.925,10.674,0.5,9.322,0.5,7.873C0.5,3.801,3.858,0.5,8,0.5S15.5,3.801,15.5,7.873z"
                    fill="#FFFFFF" stroke="#17AB4F" stroke-width="1" stroke-miterlimit="1" />
                <path
                    d="M5.429,7.926c0.084,-0.067,0.978,-1.327,1.07,-1.417c0.092,-0.09,0.122,-0.162,0.182,-0.274c0.06,-0.112,0.024,-0.226,-0.027,-0.328c-0.051,-0.102,-0.465,-1.085,-0.637,-1.485c-0.168,-0.39,-0.324,-0.371,-0.442,-0.398c-0.112,-0.026,-0.24,-0.051,-0.368,-0.075c-0.128,-0.024,-0.334,-0.016,-0.504,0.137c-0.17,0.153,-0.651,0.51,-0.621,1.422s0.746,1.92,0.846,2.062c0.1,0.141,1.418,2.246,3.369,3.404c0.464,0.276,0.825,0.456,1.107,0.593c0.464,0.226,0.882,0.284,1.211,0.297c0.367,0.015,1.121,-0.238,1.266,-0.641c0.146,-0.403,0.134,-0.774,0.083,-0.86s-0.18,-0.156,-0.375,-0.284l0,0c-0.195,-0.128,-1.153,-0.751,-1.331,-0.845c-0.178,-0.094,-0.307,-0.149,-0.429,0.013c-0.122,0.162,-1.445,1.404,-1.553,1.507"
                    fill="#FFFFFF" stroke="#17AB4F" stroke-width="1" stroke-miterlimit="1" />
            </g>
        </svg>

    </a>
    <a href="https://t.me/Kebalepile_1" target="_blank">
        Telegram
        <svg x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16"
            xml:space="preserve">
            <g id="icon">
                <polygon points="0.5,8.833 15.5,0.5 13,13.833 9.366,12.322 6.667,15.5 5.5,10.917" fill="#92CBEE"
                    stroke-linejoin="miter" />
                <polygon points="5.519,10.872 6.69,15.444 9.255,12.322 7.638,11.652 15.388,0.667" fill="#238BCB"
                    stroke-linejoin="miter" opacity="0.5" />
                <polygon points="0.5,8.833 15.5,0.5 13,13.833 7.583,11.583 6.667,15.5 5.5,10.917" fill="none"
                    stroke="#0964B0" stroke-width="1" stroke-linecap="round" stroke-miterlimit="1"
                    stroke-linejoin="round" />
                <path d="M5.5,10.917L15.5,0.5M7.583,11.583L15.5,0.5M6.667,15.5l2.583,-3.167" fill="none"
                    stroke="#0964B0" stroke-width="1" stroke-linecap="round" stroke-miterlimit="1"
                    stroke-linejoin="round" />
            </g>
        </svg> </a>
    <br>
    <button>Close</button>
</section>
<input type="text" name="search" id="search-input" disabled=true placeholder="search shit.">
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.hideMenu = true;
  }

  connectedCallback() {
    let menu = this.getElement("#menu"),
      cart = this.getElement("#cart"),
      search = this.getElement("#search"),
      elems = this.getElement(["#home", "#about", "#contact", "#scanProduct"]);

    menu.addEventListener("click", (e) => {
      this.hideMenu ? (this.hideMenu = false) : (this.hideMenu = true);
      this.toggleMenu();
    });
    cart.addEventListener("click", (e) => this.tagProcess(e.target.id));
    search.addEventListener("click", (e) => {
      this.toggleSearch();
    });
    elems.forEach((elem) =>
      elem.addEventListener("click", (e) =>  this.tagProcess(e.target.id))
    );
  
    
    let btn = this.shadowRoot.querySelector("#about-us > button");

    btn.addEventListener("click", (e) => {
     this.toggleTag(["#about-us", "#contact-us"]);
    });
    
    btn = this.shadowRoot.querySelector("#contact-us > button");
    btn.addEventListener("click", (e) => {
      this.toggleTag(["#contact-us", "#about-us"]);
    });
  }
  
  tagProcess(id) {
   
    switch (id) {
      case "home":
        this.hideMenu ? (this.hideMenu = false) : (this.hideMenu = true);
        this.toggleMenu();
        if(location.pathname !== "/"){
          document.location.assign("/");
         }
        break;
      case "about":
        let ids = ["#about-us", "#contact-us"];
        this.toggleTag(ids);
       
        break;
      case "contact":
        ids = ["#contact-us", "#about-us"];
        this.toggleTag(ids);
       
        break;
      case "scanProduct":
        if (location.pathname !== "/scan.html") {
          location.assign("/scan.html");
        }
        break;
      case "cart":
        if (location.pathname !== "/cart.html") {
          location.assign("/cart.html");
        }
        break;
      default:
        break;
    }
  }
  toggleTag(ids) {
    let tag = this.shadowRoot.querySelector(ids[0]);
    tag.style.display != "flex"
      ? (tag.style.display = "flex")
      : (tag.style.display = "none");
    let tag2 = this.shadowRoot.querySelector(ids[1]);
    if (tag2.style.display != "none") {
      tag2.style.display = "none";
    }
  }
  toggleMenu() {
    const sidebar = this.shadowRoot.querySelector("#sidebar");
    this.hideMenu
      ? (sidebar.style["display"] = "none")
      : (sidebar.style["display"] = "flex");
  }
  getElement(str) {
    if (Array.isArray(str)) {
      let elms = [];
      str.forEach((s) => {
        elms.push(this.shadowRoot.querySelector(s));
      });
      return elms;
    }
    return this.shadowRoot.querySelector(str);
  }
  toggleSearch() {
    const self = this.shadowRoot,
      tag = self.querySelector("input[name=search]");
    tag.style.display != "block"
      ? (tag.style.display = "block")
      : (tag.style.display = "none");

    // add on submit function on search input.
  }
}
export default function mountNavbar() {
  try {
    window.customElements.define("nav-bar", Navbar);
    document.body.appendChild(new Navbar());
    _componentState["navbar"] = document.body.querySelector("nav-bar");
  } catch (err) {
    console.error(`shit hit the fan ${err}`);
  }
}
