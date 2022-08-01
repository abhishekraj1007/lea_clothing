let imagePopupTemplate = null;
let base_url = "https://api.leaclothingco.com/";
let startIndex = 0;
let endIndex = 3;
let mobileStartIndex = 0;
let mobileEndIndex = 3;
let mainContainer = "";
let mobileContainer = "";
let responseResults = "";

function createElements() {
  for (let i = startIndex; i <= endIndex; i++) {
    let item = responseResults[i];
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

function createMobileElements() {
  for (let i = mobileStartIndex; i <= mobileEndIndex; i++) {
    let item = responseResults[i];
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

    mobileContainer.appendChild(product);
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

function mobileHandleCarousel(clickedItem) {
  console.log("mobile click item:", clickedItem);
  if (clickedItem === "forward" && mobileEndIndex >= responseResults.length - 1)
    return;
  if (clickedItem === "backward" && mobileStartIndex <= 0) return;

  if (clickedItem === "forward") {
    if (mobileEndIndex <= responseResults.length - 1) {
      mobileStartIndex += 4;
      mobileEndIndex += 4;
    }
    if (mobileEndIndex >= responseResults.length - 1) {
      let mobileNextBtn = document.getElementById("mobileNextBtn");
      mobileNextBtn.classList.add("disable-btn");
      console.log("mobile next btn class added");
      mobileStartIndex = responseResults.length - 4;
      mobileEndIndex = responseResults.length - 1;
    }
  }
  if (clickedItem === "backward") {
    if (mobileStartIndex !== 0) {
      mobileStartIndex -= 4;
      mobileEndIndex -= 4;
    }
    if (mobileStartIndex <= 0) {
      let mobileBackBtn = document.getElementById("mobileBackBtn");
      mobileBackBtn.classList.add("disable-btn");
      mobileStartIndex = 0;
      mobileEndIndex = 3;
    }
  }
  console.log("mobileStartIndex:", mobileStartIndex);
  console.log("mobileEndIndex:", mobileEndIndex);

  if (mobileEndIndex < responseResults.length - 1) {
    let mobileNextBtn = document.getElementById("mobileNextBtn");

    if (mobileNextBtn.classList.contains("disable-btn")) {
      mobileNextBtn.classList.remove("disable-btn");
      console.log("mobile next btn class removed!");
    }
  }
  if (mobileStartIndex !== 0) {
    let mobileBackBtn = document.getElementById("mobileBackBtn");

    if (mobileBackBtn.classList.contains("disable-btn")) {
      mobileBackBtn.classList.remove("disable-btn");
      console.log("mobile back btn class removed!");
    }
  }

  let allProductsMobile = document.querySelector(".mobile-product-container");
  console.log("all products mobile:", allProductsMobile);
  allProductsMobile.innerHTML = "";
  createMobileElements();
  console.log("mobile element created");
}

class ImageGallery extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    let userEmailId = localStorage.getItem("userEmailId");
    const container = document.querySelector(".product-container");
    const mobileProductContainer = document.querySelector(
      ".mobile-product-container"
    );
    const header = document.querySelector(".title-text");
    const customerSize = document.querySelector(".label-chip-bar");
    mainContainer = container;
    mobileContainer = mobileProductContainer;

    if (!userEmailId) {
      userEmailId = "guest@email.com";
    }

    console.log("user email app block:", userEmailId);
    const response = await fetch(
      `${base_url}/recommend?` +
        new URLSearchParams({
          email: userEmailId,
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
        customerSize.innerHTML = `
          Your Ideal Size: 
          <span class="size">
            ${data.response.beautified_results[0].Size}
          </span>
        `;
      } else {
        customerSize.innerHTML = `
          <a href="https://dev-store-1196.myshopify.com/pages/quiz" class="size-link">
           Get Your Ideal Size
          </a>
        `;
      }

      responseResults = data.response.beautified_results;
      createElements();
      createMobileElements();
    } else {
      console.log("Something went wrong...");
    }
  }
}

customElements.define("image-gallery", ImageGallery);
