import tshirt from "./images/mens-fitted-t-shirt-.png";
const template = document.createElement("template");
template.innerHTML = `
<style>
.product-card {

display:flex;
flex-flow: row wrap;
justify-content: center;
align-items:center;
background-color:white;
color:#3B3636;
width:60vw;
height:70vh;
margin:auto;
border-radius:2px;
padding:10px;
}
.product-card img{
  width:200px;
  height:200px;
}
.product-card  button {
  color:white;
  width:70px;
  height:30px;
  background-color: #228B22;
  backdrop-filter: blur(2px);
  border:none;
  border-radius:2px;
  margin-right: 25px;
}
.product-card  select {
  background-color:#676CE4;
  color:white;
  border:none;
  border-radius:2px;
  height:30px;
  width:40px;
  text-align:right;

}
.product-card div {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
#info{
  background-color:gray;
  border-radius:2px;
  color:#511db9;
  height:130px;
  width:200px;
  text-align:justify;
  display:flex;
  flex-flow:column wrap;
  align-item:center;
  justify-content:center;
  padding-left:15px;
}

</style>
<section class="product-card">
    <img src="${tshirt}" alt="product image" />
   <section id="info">

    <div id="name">Type : </div>
    <div id="price">Price : </div>
    <div id="quantity">Available in stock : </div>
    <div id="madeIn">Made In : </div>
    <div id="febric">Febric : </div>
    
   </section>
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
    let childNodes = this.shadowRoot.querySelector(".product-card > #info").childNodes;
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
          let val = this.info[id],
          span = document.createElement("span");
          span.textContent = val;
          span.style.color = "black";
          if (elem.id == id) {
            elem.appendChild(span);
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
    name: "round neck",
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
