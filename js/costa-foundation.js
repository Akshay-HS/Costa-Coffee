document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the "Costa Foundation" link
  const costaLink = document.getElementById("costa-foundation-a");
  costaLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Call a separate function for the "Costa Foundation" content
    createCostaFoundationContent();
  });

  // Rest of your JavaScript code for "Costa Foundation" here
});

function createCostaFoundationContent() {
  const container = document.getElementById("container");

  // Clear the container by removing all its child nodes
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Call the costaNewContent function to add new content for Costa Foundation
  costaNewContent(container);
}

function costaNewContent(container) {
  // Create and append content specific to Costa Foundation
  const headingNav = document.getElementById("headingNav");
  headingNav.textContent = "Costa Foundation";
  const h1 = document.createElement("h1");
  h1.id = "costa-foundation-h1";
  h1.textContent = "Building schools and futures";
  container.appendChild(h1);
  const p1 = document.createElement("p");
  p1.id = "foundation-p1";
  p1.textContent =
    "The farmers who grow coffee around the world are an essential part of our business – we couldn’t keep inspiring the world to love great coffee without them! However, we know that many coffee-growing communities are in remote rural areas in some of the world’s poorest countries, and children in these communities often have little or no access to education.";
  container.appendChild(p1);
  const img1 = document.createElement("img");
  img1.id = "foundation-img1";
  img1.src = "assets/costa-foundation-img.jpg";
  container.appendChild(img1);
  const p2 = document.createElement("p");
  p2.id = "foundation-p2";
  p2.textContent =
    "The mission of the Costa Foundation is to fund schools and school projects in coffee-growing communities which provide the opportunity to access a safe, quality education. The charity does this by:";
  container.appendChild(p2);
  const button1 = document.createElement("button");
  button1.id = "costa-foundation-button1";
  button1.href = "";
  button1.textContent = "Donations ➤";
  button1.style.cursor = "pointer";
  container.appendChild(button1);
  button1.addEventListener("click", openDialog);

  const button2 = document.createElement("button");
  button2.id = "costa-foundation-button2";
  button2.href = "";
  button2.textContent = "Volunteer ➤";
  button2.addEventListener("click", openDialog);
  button2.style.cursor = "pointer";
  container.appendChild(button2);
  // You can add more content here as needed
}
const myDialog = document.createElement("dialog");
myDialog.id = "my-dialog";
myDialog.innerHTML = `
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required /><br /><br />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required /><br /><br />

    <label for="contact-number">Number:</label>
    <input type="tel" id="contact-number" name="contact-number" required /><br /><br />

    <button id="closeButton" type="submit">Submit</button>
  </form>
`;
document.body.appendChild(myDialog);

const thanksDialog = document.createElement("dialog");
thanksDialog.id = "th-dialog";
thanksDialog.innerHTML = `<p>Thank you</p>

<button id="thanksButton" type="submit">OK</button>`;
document.body.appendChild(thanksDialog);

const openDialog = () => {
  myDialog.showModal();
};

closeButton.addEventListener("click", () => {
  myDialog.close();
  thanksDialog.showModal();
});
thanksButton.addEventListener("click", () => {
  thanksDialog.close();
});

// Prevent the dialog box from closing automatically
thanksDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
