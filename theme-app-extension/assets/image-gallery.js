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
    productPrice.textContent = `${item.Price}`;

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
    productPrice.textContent = `${item.Price}`;

    mobileContainer.appendChild(product);
    product.appendChild(figure);
    figure.appendChild(image);

    product.appendChild(productTitle);
    product.appendChild(productPrice);
  }
}

function handleCarousel(clickedItem) {
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

  if (endIndex < responseResults.length - 1) {
    let nextBtn = document.getElementById("nextBtn");

    if (nextBtn.classList.contains("disable-btn")) {
      nextBtn.classList.remove("disable-btn");
    }
  }
  if (startIndex !== 0) {
    let backBtn = document.getElementById("backBtn");

    if (backBtn.classList.contains("disable-btn")) {
      backBtn.classList.remove("disable-btn");
    }
  }

  let allProducts = document.querySelector(".product-container");
  allProducts.innerHTML = "";
  createElements();
}

function mobileHandleCarousel(clickedItem) {
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

  if (mobileEndIndex < responseResults.length - 1) {
    let mobileNextBtn = document.getElementById("mobileNextBtn");

    if (mobileNextBtn.classList.contains("disable-btn")) {
      mobileNextBtn.classList.remove("disable-btn");
    }
  }
  if (mobileStartIndex !== 0) {
    let mobileBackBtn = document.getElementById("mobileBackBtn");

    if (mobileBackBtn.classList.contains("disable-btn")) {
      mobileBackBtn.classList.remove("disable-btn");
    }
  }

  let allProductsMobile = document.querySelector(".mobile-product-container");
  allProductsMobile.innerHTML = "";
  createMobileElements();
}

class ImageGallery extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    // window.cffCustomer -> undefined if user not logged in otherwise is an object containing user information
    // {name: 'john doe', email: 'abhishek.raj@algoscale.com', hasAccount: 'true', id: '6260460978418'}
    let userEmailId = !localStorage.getItem("userEmailId")
      ? window.cffCustomer
        ? window.cffCustomer?.email
        : ""
      : localStorage.getItem("userEmailId");

    let product_title =
      window.ShopifyAnalytics.meta.product.variants[0]["name"].split(" - ")[0];

    if (!userEmailId && !product_title) {
      alert("invalid parameters for recommend API");
      return;
    }

    const container = document.querySelector(".product-container");
    const mobileProductContainer = document.querySelector(
      ".mobile-product-container"
    );
    // const header = document.querySelector(".title-text");
    const customerSize = document.querySelector(".head");
    mainContainer = container;
    mobileContainer = mobileProductContainer;

    const response = await fetch(
      `${base_url}/recommend?` +
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
      // header.textContent = data.response.display_text;

      if (data.response.beautified_results[0].Size) {
        customerSize.innerHTML = `
        <div class="chip-bar-wrapper">
          <div class="label-chip-bar">
            Your Ideal Size: 
            <span class="size">
              ${data.response.beautified_results[0].Size}
            </span>
          </div>
        </div>

        <div class="title-text-wrapper">
          <div class="title-text">
            ${data.response.display_text}
          </div>
        </div>
        `;
      } else {
        customerSize.innerHTML = `
        <div class="chip-bar-wrapper">
          <a href="https://dev-store-1196.myshopify.com/pages/quiz" class="size-link">
              Find Your Ideal Size
          </a>
        </div>

        <div class="title-text-wrapper">
          <div class="title-text">
            ${data.response.display_text}
          </div>
        </div>
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
