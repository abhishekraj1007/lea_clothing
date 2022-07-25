let imagePopupTemplate = null;
let base_url = "https://a19d-223-190-82-175.in.ngrok.io";

class ImageGallery extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const container = document.querySelector(".product-container");
    const header = document.querySelector(".title-text");
    const response = await fetch(
      `${base_url}/recommend?` +
        new URLSearchParams({
          email: "chandan.roy@algoscale.com",
          product_title: "Tatiana Ruched Midi Corset Dress",
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
      for (let item of data.response.beautified_results) {
        const product = document.createElement("div");
        product.setAttribute("class", "product");
        const figure = document.createElement("figure");
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

        container.appendChild(product);
        product.appendChild(figure);
        figure.appendChild(image);
        product.appendChild(productTitle);
        product.appendChild(productPrice);
      }
    } else {
      console.log("Something went wrong...");
    }
  }
}

customElements.define("image-gallery", ImageGallery);
