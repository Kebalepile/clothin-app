const template = document.createElement("template");
template.innerHTML = `
<section class="product-card">
    <img src="#" alt="product image">
    <p id="name">Type: </p>
    <p id="price">Price:</p>
    <p id="quantity">Available in stock</p>
    <p id="madeIn">Made In</p>
    <p id="febric">Febric Typ:e</p>
    <button id="buy">BUY</button>
    <select name="qty">
        <option value="1" > 1</option>
        <option value="2" > 2</option>
    </select>
</section>`;

class Merch extends HTMLElement {
  constructor(info) {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.info = info;
  }
  getElements(names) {
    let childNodes = this.shadowRoot.querySelector(".product-card").childNodes;
    childNodes = Array.from(childNodes);
    return childNodes.filter((node) => {
      let elems = [];
      if (names.includes(node.id)) {
        elems.push(node);
      }
      return elems;
    });
  }
  render() {
    let ids = ["#name", "#price", "#quantity", "#febric", "#madeIn"],
      elements = this.getElements(ids.map((id) => id.slice[1]));

    elements.forEach((elem) => {
      if (elem.nodeName !== "#text") {
        ids.forEach((id) => {
          id = id.slice(1);
          let val = this.info[id];
          if (elem.id == id) {
            elem.textContent += ` ${val}.`;
          }
        });
      }
    });
  }
  connectedCallback() {
    console.log("custom product element mounted on.");
    this.render();
  }

  disconnectedCallback() {
    console.log("custom product element removed from page.");
  }
}
export default function product(
  info = {
    name: "polo neck",
    price: "R150.00",
    febric: "100% cotten",
    madeIn: "South Africa",
    quantity: "1",
  }
) {
  try {
    window.customElements.define("merch-card", Merch);
    //   add merch-card to section[#merch] element
    // instead of body

    document.body.appendChild(new Merch(info));
    // change to merch-card section i.e. querySelector("#merch")
    _componentState["merch-card"] = document.body.querySelector("merch-card");
  } catch (err) {
    console.error(`shit hit the fan ${err}.`);
  }
}
