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
<section id="about-us" style="display: none;">
<p><b>About Us :</b> <br>
<!-- add proper information on final Web Application. -->
    Sit in aliqua exercitation voluptate.
    Tempor magna aute et nisi. Dolor voluptate do mollit excepteur et ex.
    Dolor in veniam ut minim nisi commodo aute. Eiusmod occaecat cupidatat aliqua ex et ullamco fugiat nisi
    eiusmod adipisicing qui nulla eiusmod.
    Fugiat aliquip laboris aute eu. Nostrud proident dolor non ullamco ut occaecat aliquip quis.
    Ex labore veniam elit anim est deserunt velit.
</p>
<br>
<button>Close</button>
<br>
<p>Copyright @ K.T Motshoana 2022</p>
</section>
<section id="contact-us" style="display: none;">
<p><b>Contact Us:</b><br>
    Email: pimpabutterfly86@gmail.com <br>
    Phone Number: +27239405819 <br>
    Telegram</p>
<br>
<button>Close</button>
</section>
<input type="text" name="search" id="search-input" disabled=true placeholder="search shit." style="display:none;">
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
  toggleSearch() {
    const self = this.shadowRoot,
      tag = self.querySelector("input[name=search]");
    tag.style.display != "block"
      ? (tag.style.display = "block")
      : (tag.style.display = "none");

    // add on submit function on search input.
  }
  connectedCallback() {
    let menu = this.getElement("li#menu"),
      cart = this.getElement("li#cart"),
      search = this.getElement("#search"),
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
    cart.addEventListener("click", (e) => this.tagProcess(e.target.id));
    search.addEventListener("click", (e) => {
      this.toggleSearch();
    });
    elems.forEach((elem) =>
      elem.addEventListener("click", (e) => {
        this.tagProcess(e.target.id);
      })
    );
  }
  toggleTag(ids) {
    let tag = this.shadowRoot.querySelector(ids[0]);
    tag.style.display != "block"
      ? (tag.style.display = "block")
      : (tag.style.display = "none");
    let tag2 = this.shadowRoot.querySelector(ids[1]);
    if (tag2.style.display != "none") {
      tag2.style.display = "none";
    }
  }
  tagProcess(id) {
    switch (id) {
      case "home":
        this.hideMenu ? (this.hideMenu = false) : (this.hideMenu = true);
        this.toggleMenu();
        break;
      case "about":
        let ids = ["#about-us", "#contact-us"];
        this.toggleTag(ids);
        let btn = this.shadowRoot.querySelector("#about-us > button");
        btn.addEventListener("click", (e) => {
          let tag = this.shadowRoot.querySelector("#about-us");
          tag.style.display != "block"
            ? (tag.style.display = "block")
            : (tag.style.display = "none");
        });
        break;
      case "contact":
        ids = ["#contact-us", "#about-us"];
        this.toggleTag(ids);
        btn = this.shadowRoot.querySelector("#contact-us > button");
        btn.addEventListener("click", (e) => {
          let tag = this.shadowRoot.querySelector("#contact-us");
          tag.style.display != "block"
            ? (tag.style.display = "block")
            : (tag.style.display = "none");
        });
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
  toggleMenu() {
    const sidebar = this.shadowRoot.querySelector("section#sidebar");
    this.hideMenu
      ? (sidebar.style["display"] = "none")
      : (sidebar.style["display"] = "inline-block");
   
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
