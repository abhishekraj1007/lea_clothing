async function cartContents() {
  const response = await fetch(window.Shopify.routes.root + "cart.js");

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
}

const base_url = "https://api.leaclothingco.com";

async function fetchCartData(email) {
  const cartProducts = await cartContents();
  console.log("cartProducts", cartProducts?.items);
  const response = await fetch(
    `${base_url}/cart?` +
      new URLSearchParams({
        email: email,
        product_title: cartProducts?.items[0]['product_title'] || "Carla Mauve Silk Corset Top",
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
    console.log("CART DATA", data);
  } else {
    console.log("Something went wrong...");
  }
}

fetchCartData("abhishek0025@gmail.com");
