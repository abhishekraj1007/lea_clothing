async function cartContents() {
  const response = await fetch(window.Shopify.routes.root + "cart.js");

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
}

const base_url = "https://api.leaclothingco.com";
let mainContainer = "";
let productsRes = "";

function createElements() {
  let products = productsRes.length;
  if (productsRes.length > 4) {
    products = 4;
  }

  for (let i = 0; i < products; i++) {
    let item = productsRes[i];
    const product = document.createElement("div");
    product.setAttribute("class", "product");

    const figure = document.createElement("a");
    figure.setAttribute("class", "image_wrapper");
    figure.setAttribute("href", item.URL);

    const image = document.createElement("img");
    image.setAttribute("class", "product_img");

    image.src = item.IMGURL;
    const productTitle = document.createElement("div");
    productTitle.setAttribute("class", "product_title");
    productTitle.textContent = item.Title;

    const productPrice = document.createElement("div");
    productPrice.setAttribute("class", "product_price");
    productPrice.textContent = `Rs. ${item.Price}`;

    mainContainer.appendChild(product);
    product.appendChild(figure);
    figure.appendChild(image);

    product.appendChild(productTitle);
    product.appendChild(productPrice);
  }
}

class CartDataAjax extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    let cartSection = document.getElementById(
      "shopify-block-d600a638-4568-4951-aa78-7c8f0bdac267"
    );
    cartSection.style =
      "display: flex; justify-content: flex-end; margin: 2rem 0;";

    const cartProducts = await cartContents();

    const container = document.querySelector(".cart-product-container");
    mainContainer = container;


    let userEmailId =
      localStorage.getItem("userEmailId") || window.cffCustomer
        ? window.cffCustomer?.email
        : "abhishek.raj@algoscale.com";

    let product_title = cartProducts?.items[0]["product_title"];

    if (!userEmailId && !product_title) {
      alert("invalid parameters for cart API");
      return;
    }

    const response = await fetch(
      `${base_url}/cart?` +
        new URLSearchParams({
          email: userEmailId,
          product_title,
        }),
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      productsRes = data.response;
      createElements();
    } else {
      console.log("Something went wrong...");
    }
  }
}

customElements.define("cart-data-ajax", CartDataAjax);
