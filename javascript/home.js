fetch("https://dummyjson.com/users/")
  .then((response) => response.json())
  .then((data) => {
    const users = data.users;

    // Create image elements dynamically
    // for (let i = 0; i < 2; i++) {
    const imageElement = document.createElement("img");
    imageElement.src = users[0].image;
    imageElement.alt = "User Image";
    // }

    var whole_body_container = document.querySelector(".whole-body-container");

    var middle_body_container = document.createElement("div");
    middle_body_container.classList.add("middle-body-container");

    var our_coffee_leftDiv = document.createElement("div");
    our_coffee_leftDiv.classList.add("our-coffee-leftDiv");

    var our_coffee_image = document.createElement("img");
    our_coffee_image = imageElement;
    our_coffee_image.classList.add("our_coffee_img");
    our_coffee_leftDiv.appendChild(our_coffee_image);

    var our_coffee_rightDiv = document.createElement("div");
    our_coffee_rightDiv.classList.add("our-coffee-rightDiv");

    var our_coffee_title = document.createElement("h1");
    our_coffee_title.classList.add("our-coffee-title");
    our_coffee_title.textContent = "Our Coffee";
    our_coffee_rightDiv.appendChild(our_coffee_title);

    var our_coffee_textDiv = document.createElement("div");
    our_coffee_textDiv.classList.add("our-coffee-textDiv");
    our_coffee_rightDiv.appendChild(our_coffee_textDiv);

    var our_coffee_text = document.createTextNode(
      "Our iconic Signature Blends are slow roasted for the perfect balance of rich flavour and smooth taste. We guarantee you the freshest taste and finest ingredients, every time. Check out our full range of drinks, snacks and meals and discover your favourites."
    );
    our_coffee_textDiv.appendChild(our_coffee_text);

    var our_coffee_menuButton = document.createElement("button");
    our_coffee_menuButton.classList.add("our-coffee-menuButton");
    our_coffee_menuButton.textContent = "Explore the full menu"; // Set the button text

    var our_coffee_buttonDiv = document.createElement("div");
    our_coffee_buttonDiv.classList.add("our-coffee-buttonDiv");
    our_coffee_rightDiv.appendChild(our_coffee_buttonDiv);

    our_coffee_menuButton.addEventListener("click", function () {
      var destinationURL = "https://example.com/another-page.html";
      window.location.href = destinationURL;
    });
    our_coffee_buttonDiv.appendChild(our_coffee_menuButton);

    middle_body_container.appendChild(our_coffee_leftDiv);
    middle_body_container.appendChild(our_coffee_rightDiv);

    // document.body.appendChild(middle_body_container);
    whole_body_container.appendChild(middle_body_container);
  });
