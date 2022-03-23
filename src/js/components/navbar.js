const template = document.createElement("template");
template.innerHTML = `
<section id="sidebar" style="display:none;">
<ul>
    <li id="home">home</li>
    <li id="contact">contact us</li>
    <li id="about">about us</li>
    <li id="scanProduct"> scan product</li>
</ul>
</section> 
<ul id="navbar">
<li id="menu">menu</li>
<li id="search">search</li>
<li id="cart">cart</li>
</ul>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.hideMenu = true;
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

  connectedCallback() {
    let menu = this.getElement("li#menu"),
      cart = this.getElement("li#cart"),
      elems = this.getElement([
        "li#home",
        "li#about",
        "li#contact",
        "li#scanProduct",
      ]);

    menu.addEventListener("click", (e) => {
      this.hideMenu ? (this.hideMenu = false) : (this.hideMenu = true);
      this.toggleMenu();
    });
    cart.addEventListener("click", (e) => this.changeURL(e.target.id));

    elems.forEach((elem) =>
      elem.addEventListener("click", (e) => {
        // change url to respective path.
        console.log(`clicked ${e.target.id} element.`);

        this.changeURL(e.target.id);
      })
    );
  }
  changeURL(id) {
    switch (id) {
      case "home":
        this.hideMenu ? (this.hideMenu = false) : (this.hideMenu = true);
        this.toggleMenu();
        console.log(location.pathname);
        break;
      case "about":
        break;
      case "contact":
        break;
      case "scanProduct":
        if (location.pathname !== "/scan.html") {
          location.assign("/scan.html");

          break;
        }
        break;
        case "cart":
          if (location.pathname !== "/cart.html") {
            location.assign("/cart.html");
  
            break;
          }
          break;
      default:
        break;
    }
  }
  toggleMenu() {
    const sidebar = this.shadowRoot.querySelector("section#sidebar");
    switch (this.hideMenu) {
      case true:
        sidebar.style["display"] = "none";
        break;
      case false:
        sidebar.style["display"] = "inline-block";
        break;
      default:
        sidebar.style["display"] = "none";
        break;
    }
  }

  disconnectedCallback() {
    console.log("custom navbar removed from page.");
  }

  adoptedCallback() {
    console.log("custom navbar moved to a new page.");
  }

  // static get observedAttributes(){
  //     return ['name'];
  // }
  // @Description
  // Invoked when one of the custom element's attributes is added,
  // removed, or changed.
  // attributeChangedCallback(name, oldValue, newValue){
  //     console.log("custom navbar element attributes changed.");
  //     // you can call any other class method in here.
  // }
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
