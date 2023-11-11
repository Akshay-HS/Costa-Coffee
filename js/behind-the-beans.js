// Function to set a random image from the Picsum API
function setRandomImage() {
  fetch("https://picsum.photos/v2/list/?limit=100")
    .then((response) => response.json())
    .then((data) => {
      // Set random images for elements with specific IDs
      document.getElementById("nav-background-image").src =
        data[Math.floor(Math.random() * 99)].download_url;
      document.getElementById("div-img1").src =
        data[Math.floor(Math.random() * 99)].download_url;
      document.getElementById("div-img2").src =
        data[Math.floor(Math.random() * 99)].download_url;
      document.getElementById("div-img3").src =
        data[Math.floor(Math.random() * 99)].download_url;
    })
    .catch((error) => console.error("Error:", error));
}

// Initial call to setRandomImage to start the cycle
setRandomImage();

// Create 3 div containers
for (let i = 1; i < 4; i++) {
  // Get the container element
  const container = document.getElementById("container");

  // Create the main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-div");

  // Create the left div
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left-div");

  // Create the right div
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right-div");

  // Create an image element
  const image = document.createElement("img");
  image.id = `div-img${i}`;

  // Append the left and right divs to the main div
  leftDiv.appendChild(image);

  if (i % 2 == 0) {
    rightDiv.appendChild(image);
    mainDiv.appendChild(leftDiv);
    mainDiv.appendChild(rightDiv);
    leftDiv.style.backgroundColor = getRandomColor();
    addContent(leftDiv, i);
  } else {
    leftDiv.appendChild(image);
    mainDiv.appendChild(leftDiv);
    mainDiv.appendChild(rightDiv);
    rightDiv.style.backgroundColor = getRandomColor();
    addContent(rightDiv, i);
  }

  // Append the main div to the container
  container.appendChild(mainDiv);
}

// Function to add content to the div
function addContent(div, i) {
  const h1 = document.createElement("h1");
  h1.id = `h1-${i}`;

  const p = document.createElement("p");
  p.id = `p-${i}`;

  const button = document.createElement("button");
  button.className = "learn-button";
  button.textContent = "Learn More ➤";

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(button);
}

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Make Coffee Section
document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const coffeeType = document.getElementById("coffee-type");
  const coffeeSize = document.getElementById("coffee-size");
  const milkOptions = document.querySelectorAll("input[name='milk']");
  const sweeteners = document.querySelectorAll("input[type='checkbox']");
  const flavors = document.querySelectorAll("input[type='checkbox']");
  const totalPrice = document.getElementById("total-price");

  // Define prices for coffee types and sizes
  const coffeePrices = { espresso: 2.5, cappuccino: 3.5, latte: 4.0 };
  const sizePrices = { small: 0, medium: 1.0, large: 1.5 };

  // Function to calculate the total price based on user selections
  function calculateTotalPrice() {
    let price = coffeePrices[coffeeType.value] + sizePrices[coffeeSize.value];

    milkOptions.forEach((milkOption) => {
      if (milkOption.checked) {
        price += 0.5;
      }
    });

    sweeteners.forEach((sweetener) => {
      if (sweetener.checked) {
        price += 0.25;
      }
    });

    flavors.forEach((flavor) => {
      if (flavor.checked) {
        price += 0.75;
      }
    });

    totalPrice.textContent = price.toFixed(2);
  }

  // Update the total price when selections change
  coffeeType.addEventListener("change", calculateTotalPrice);
  coffeeSize.addEventListener("change", calculateTotalPrice);
  milkOptions.forEach((milkOption) => {
    milkOption.addEventListener("change", calculateTotalPrice);
  });
  sweeteners.forEach((sweetener) => {
    sweetener.addEventListener("change", calculateTotalPrice);
  });
  flavors.forEach((flavor) => {
    flavor.addEventListener("change", calculateTotalPrice);
  });

  // Initial calculation
  calculateTotalPrice();
});
