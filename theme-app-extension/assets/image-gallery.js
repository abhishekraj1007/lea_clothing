let imagePopupTemplate = null;
let base_url = "https://a19d-223-190-82-175.in.ngrok.io";
let startIndex = 0;
let endIndex = 3;
let mainContainer = "";
let responseResults = "";

function createElements() {
  for (let i = startIndex; i <= endIndex; i++) {
    let item = responseResults[i];
    const product = document.createElement("div");
    product.setAttribute("class", "product");

    const figure = document.createElement("div");
    figure.setAttribute("class", "image_wrapper");

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

function handleCarousel(clickedItem) {
  console.log("click item:", clickedItem);
  if (clickedItem === "forward" && endIndex >= responseResults.length - 1)
    return;
  if (clickedItem === "backward" && startIndex <= 0) return;

  if (clickedItem === "forward") {
    if (endIndex <= responseResults.length - 1) {
      startIndex += 4;
      endIndex += 4;
    }
    if (endIndex >= responseResults.length - 1) {
      let nextBtn = document.getElementById("nextBtn");
      nextBtn.classList.add("disable-btn");
      console.log("next btn class added");
      startIndex = responseResults.length - 4;
      endIndex = responseResults.length - 1;
    }
  }
  if (clickedItem === "backward") {
    if (startIndex !== 0) {
      startIndex -= 4;
      endIndex -= 4;
    }
    if (startIndex <= 0) {
      let backBtn = document.getElementById("backBtn");
      backBtn.classList.add("disable-btn");
      startIndex = 0;
      endIndex = 3;
    }
  }
  console.log("startIndex:", startIndex);
  console.log("endIndex:", endIndex);

  if (endIndex < responseResults.length - 1) {
    let nextBtn = document.getElementById("nextBtn");
    if (nextBtn.classList.contains("disable-btn")) {
      nextBtn.classList.remove("disable-btn");
      console.log("next btn class removed!");
    }
  }
  if (startIndex !== 0) {
    let backBtn = document.getElementById("backBtn");
    if (backBtn.classList.contains("disable-btn")) {
      backBtn.classList.remove("disable-btn");
      console.log("back btn class removed!");
    }
  }

  let allProducts = document.querySelector(".product-container");
  console.log("all products:", allProducts);
  allProducts.innerHTML = "";
  createElements();
  console.log("element created");
}

class ImageGallery extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const container = document.querySelector(".product-container");
    const header = document.querySelector(".title-text");
    const customerSize = document.querySelector(".size");
    mainContainer = container;

    const response = await fetch(
      `${base_url}/recommend?` +
        new URLSearchParams({
          email: "chandan.roy@algoscale.com",
          product_title: "Carla Mauve Silk Corset Top",
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
      header.textContent = data.response.display_text;

      if (data.response.beautified_results[0].Size) {
        customerSize.innerText = `${data.response.beautified_results[0].Size}`;
      } else {
        customerSize.innerText = "-";
      }

      responseResults = data.response.beautified_results;
      createElements();
    } else {
      console.log("Something went wrong...");
    }
  }
}

customElements.define("image-gallery", ImageGallery);
