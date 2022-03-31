import t1 from "./images/mens-fitted-t-shirt-.png";
import t2 from "./images/mens-fitted-t-shirt-midnight.png";
import t3 from "./images/Unisex_T-Shirts_460x.png";
import t4 from "./images/Women_s_T-Shirts_460x.png";
import css  from "./css.js";
const template = document.createElement("template");
template.innerHTML = `
${css()}
`;

class Merch extends HTMLElement {
  constructor(info) {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.info = info;
  }
  getElements(names) {
    let childNodes = this.shadowRoot.querySelector(
      ".product-card > #info"
    ).childNodes;
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
    this.productCard();
  }

  productCard() {
    // this.info should be an array of objects.

    this.info.forEach((obj) => {
      let card = document.createElement("section"),
        info = document.createElement("section"),
        img = document.createElement("img"),
        btn = document.createElement("button"),
        select = document.createElement("select"),
        sec = document.createElement("section"),
        count = 0,
        options = [],
        divs = [];

      while (count != 2) {
        if (count > 0) {
          let op = document.createElement("option");
          op.value = count;
          op.textContent = count;
          options.push(op);
        }
        count++;
      }
      btn.textContent = "Buy";
      btn.addEventListener("click", (e) => {
        alert("Functionality under construction Poi.");
      });
      /*
      remove this above event and add proper functionality.
       */
      sec.appendChild(btn);
      options.forEach((op) => select.appendChild(op));
      sec.appendChild(select);

      count = 0;
      let ids = ["#name", "#price", "#quantity", "#febric", "#madeIn"];
      while (count != 5) {
        let div = document.createElement("div");
        div.setAttribute("id", ids[count]);
        divs.push(div);
        count++;
      }
      divs.forEach((div) => {
        let span = document.createElement("span");
        span.style.color = "black";
        span.textContent = obj[div.id.slice(1)];
        div.textContent = `${div.id.slice(1)} : `;
        div.appendChild(span);
        info.appendChild(div);
      });

      info.setAttribute("id", "info");
      img.src = obj.img;
      img.alt = "product image.";
      card.setAttribute("class", "product-card");
      card.appendChild(img);
      card.appendChild(info);
      card.appendChild(sec);
      this.shadowRoot.appendChild(card);
    });
  }

  connectedCallback() {
    console.log("custom product element mounted on.");
    this.render();
  }
}
export default function product(
  // remove this when connecting to database.
  info = [
    {
      name: "Men Fitted T",
      price: "R150.00",
      febric: "100% cotten",
      madeIn: "South Africa",
      quantity: "1",
      img: t1,
    },
    {
      name: "Men Fitted T",
      price: "R150.00",
      febric: "100% cotten",
      madeIn: "South Africa",
      quantity: "1",
      img: t2,
    },
    {
      name: "Unisex T",
      price: "R150.00",
      febric: "100% cotten",
      madeIn: "South Africa",
      quantity: "1",
      img: t3,
    },
    {
      name: "Women T",
      price: "R150.00",
      febric: "100% cotten",
      madeIn: "South Africa",
      quantity: "1",
      img: t4,
    },
  ]
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
