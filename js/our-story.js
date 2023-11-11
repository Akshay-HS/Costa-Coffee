(async function () {
  try {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();

    //create main image at the top
    const imageUrl = data[Math.floor(Math.random() * 29)].download_url;

    const topimageElement = document.createElement("img");
    topimageElement.src = imageUrl;
    topimageElement.alt = "Coffee Image";
    topimageElement.classList.add("our-coffee-top-img");

    const coffeeTopImageDiv = document.querySelector(
      ".our-coffee-topImage-div"
    );
    coffeeTopImageDiv.appendChild(topimageElement);

    //create an information section
    function createImageFirstDivision(rowCount) {
      var whole_body_container = document.querySelector(
        ".whole-body-container"
      );
      for (i = 1; i <= rowCount; i++) {
        var middle_body_container = document.createElement("div");
        middle_body_container.classList.add("middle-body-container");
        var our_coffee_leftDiv = document.createElement("div");
        our_coffee_leftDiv.classList.add("our-coffee-leftDiv");
        var coffeeHistory_image = document.createElement("img");
        const imageElement = document.createElement("img");
        imageElement.src = data[Math.floor(Math.random() * 29)].download_url;
        imageElement.alt = "User Image";
        coffeeHistory_image = imageElement;
        coffeeHistory_image.classList.add("our_coffee_img");

        var our_coffee_rightDiv = document.createElement("div");
        our_coffee_rightDiv.classList.add("our-coffee-rightDiv");
        var our_coffee_title = document.createElement("h1");
        our_coffee_title.classList.add("our-coffee-title");
        our_coffee_title.textContent = "Our Coffee";
        var our_coffee_textDiv = document.createElement("div");
        our_coffee_textDiv.classList.add("our-coffee-textDiv");
        var our_coffee_text = document.createTextNode(
          "Our iconic Signature Blends are slow roasted for the perfect balance of rich flavour and smooth taste. We guarantee you the freshest taste and finest ingredients, every time. Check out our full range of drinks, snacks and meals and discover your favourites."
        );
        var our_coffee_menuButton = document.createElement("button");
        our_coffee_menuButton.classList.add("our-coffee-menuButton");
        our_coffee_menuButton.textContent = "Explore the full menu"; // Set the button text
        var our_coffee_buttonDiv = document.createElement("div");
        our_coffee_buttonDiv.classList.add("our-coffee-buttonDiv");
        our_coffee_menuButton.addEventListener("click", function () {
          var destinationURL = "https://example.com/another-page.html";
          window.location.href = destinationURL;
        });
        if (i % 2 == 0) {
          our_coffee_leftDiv.appendChild(coffeeHistory_image);
          our_coffee_rightDiv.appendChild(our_coffee_title);
          our_coffee_rightDiv.appendChild(our_coffee_textDiv);
          our_coffee_rightDiv.appendChild(our_coffee_buttonDiv);
        } else {
          our_coffee_rightDiv.appendChild(coffeeHistory_image);
          our_coffee_leftDiv.appendChild(our_coffee_title);
          our_coffee_leftDiv.appendChild(our_coffee_textDiv);
          our_coffee_leftDiv.appendChild(our_coffee_buttonDiv);
        }
        our_coffee_textDiv.appendChild(our_coffee_text);
        our_coffee_buttonDiv.appendChild(our_coffee_menuButton);
        middle_body_container.appendChild(our_coffee_leftDiv);
        middle_body_container.appendChild(our_coffee_rightDiv);
        whole_body_container.appendChild(middle_body_container);
        var blank_space_div = document.createElement("div");
        blank_space_div.classList.add("blank-space-div");
        whole_body_container.appendChild(blank_space_div);
      }
    }
    createImageFirstDivision(2);

    //to clear division and add new information to the same division
    const clickedOurStory = document.getElementById("our-story-ourCoffees");
    clickedOurStory.addEventListener("click", function coffeeHistoryPage() {
      // function coffeeHistoryPage() {
      const wholeBodyContainer = document.querySelector(
        ".whole-body-container"
      );
      //clearing the division
      while (wholeBodyContainer.firstChild) {
        wholeBodyContainer.removeChild(wholeBodyContainer.firstChild);
      }
      //create coffee sections and their information on the page
      for (i = 1; i < 6; i++) {
        //container for the whole section
        var coffeeHistory_middle_container = document.createElement("div");
        coffeeHistory_middle_container.classList.add(
          "coffeeHistory-middleBody-container"
        );
        //left division
        var coffeeHistory_section_leftDiv = document.createElement("div");
        coffeeHistory_section_leftDiv.classList.add(
          "coffeeHistory-section-leftDiv"
        );
        //elements in the section
        var coffeeHistory_image = document.createElement("img");
        const imageElement = document.createElement("img");
        imageElement.src = data[Math.floor(Math.random() * 29)].download_url;
        imageElement.alt = "User Image";
        coffeeHistory_image = imageElement;
        coffeeHistory_image.classList.add("coffeeHistory_img");

        //right division
        var coffeeHistory_section_rightDiv = document.createElement("div");
        coffeeHistory_section_rightDiv.classList.add(
          "coffeeHistory-section-rightDiv"
        );
        //elements in the section
        var coffeeHistory_title = document.createElement("h1");
        coffeeHistory_title.classList.add("coffeeHistory-title");
        coffeeHistory_title.textContent = "Espresso";
        var coffeeHistory_textDiv = document.createElement("div");
        coffeeHistory_textDiv.classList.add("our-coffee-textDiv");
        var coffeeHistory_text = document.createTextNode(
          "The Espresso is where it all begins. Its rich aroma is the heartbeat of all our coffees. We craft one simple shot of our intense roast for the most elegant of drinks."
        );
        //assign elements to either left or right divisions
        if (i % 2 == 0) {
          coffeeHistory_section_leftDiv.appendChild(coffeeHistory_image);
          coffeeHistory_section_rightDiv.appendChild(coffeeHistory_title);
          coffeeHistory_section_rightDiv.appendChild(coffeeHistory_textDiv);
        } else {
          coffeeHistory_section_rightDiv.appendChild(coffeeHistory_image);
          coffeeHistory_section_leftDiv.appendChild(coffeeHistory_title);
          coffeeHistory_section_leftDiv.appendChild(coffeeHistory_textDiv);
        }
        coffeeHistory_textDiv.appendChild(coffeeHistory_text);
        coffeeHistory_middle_container.appendChild(
          coffeeHistory_section_leftDiv
        );
        coffeeHistory_middle_container.appendChild(
          coffeeHistory_section_rightDiv
        );
        //link all the elements to their divisions
        wholeBodyContainer.appendChild(coffeeHistory_middle_container);
        var blank_space_div = document.createElement("div");
        blank_space_div.classList.add("blank-space-div-history");
        wholeBodyContainer.appendChild(blank_space_div);
      }
      createImageFirstDivision(1);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
