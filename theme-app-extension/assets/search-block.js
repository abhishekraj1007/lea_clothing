const base_url = "https://api.leaclothingco.com";

async function searchBlockApi() {
  const params = new URLSearchParams(window.location.search)
  const response = await fetch(
    `${base_url}/search?query=${params.get('q')}`,
    { method: "GET", mode: "cors" }
  )


  if (response.ok) {
    const data = await response.json();
    alert('request made successfully')
  
  } else {
    console.log("Something went wrong...");
    alert(`something went wrong`)
  }
}


searchBlockApi().then((res) => console.log(res)).catch((error) => console.log(error));