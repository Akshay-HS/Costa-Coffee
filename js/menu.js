function food() {
  fetch("https://picsum.photos/v2/list/?limit=100")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const container = document.getElementById("maincontainer");
      container.innerHTML = ""; // Clear previous content

      for (let i = 0; i < 3; i++) {
        const con = document.createElement("div");
        con.className = "menu-item-container";
        const lcont = document.createElement("div");
        lcont.className = "left-container";
        const img3 = document.createElement("img");
        const ran = Math.floor(Math.random() * 25);
        img3.src = data[ran].download_url;
        img3.id = "foodimg";
        const rcont = document.createElement("div");
        rcont.className = "right-container";
        const h2 = document.createElement("h2");
        h2.textContent = data[ran].author;
        h2.className = "headtxt";
        const p = document.createElement("p");
        p.textContent =
          " Perfectly extracted, this short, aromatic, intense drink contains all the best flavor from our coffee beans.";

        rcont.appendChild(h2);
        rcont.appendChild(p);
        lcont.appendChild(img3);
        con.appendChild(lcont);
        con.appendChild(rcont);
        container.appendChild(con);

        const con2 = document.createElement("div");
        con2.className = "menu-item-container";
        const lcont2 = document.createElement("div");
        lcont2.className = "left-container";
        const head2 = document.createElement("h2");
        const ran1 = Math.floor(Math.random() * 25);
        head2.textContent = data[ran1].author;
        const p2 = document.createElement("p");
        p2.textContent =
          " Perfectly extracted, this short, aromatic, intense drink contains all the best flavour from our coffee beans.";

        const rcont2 = document.createElement("div");
        rcont2.className = "right-container";
        const img5 = document.createElement("img");
        img5.src = data[ran1].download_url;
        img5.id = "foodimg";
        container.appendChild(con2);
        con2.appendChild(rcont2);
        con2.appendChild(lcont2);
        rcont2.appendChild(head2);
        rcont2.appendChild(p2);
        lcont2.appendChild(img5);
      }
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });

}

food();

document.addEventListener("DOMContentLoaded", function () {
  var drinksLink = document.querySelector('#nav-bar-food a[href="#drinks"]');
  drinksLink.addEventListener("click", function () {
    reloadDIV();
    drinks();
  });

  var foodLink = document.querySelector('#nav-bar-food a[href="#food"]');
  foodLink.addEventListener("click", function () {
    reloadDIV();
    food();
  });

  function reloadDIV() {
    const container = document.getElementById("maincontainer");
    container.innerHTML = ""; // Clear the contents of maincontainer
  }

  function drinks() {
    fetch("https://picsum.photos/v2/list/?limit=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const container = document.getElementById("maincontainer");
        container.innerHTML = ""; // Clear previous content
        for (let i = 0; i < 5; i++) {
        const con = document.createElement("div");
        con.className = "menu-item-container";
        const lcont = document.createElement("div");
        lcont.className = "left-container";
        const img3 = document.createElement("img");
        const ran = Math.floor(Math.random() * 25);
        img3.src = data[ran].download_url;
        img3.id = "foodimg";
        const rcont = document.createElement("div");
        rcont.className = "right-container";
        const h2 = document.createElement("h2");
        h2.textContent = data[ran].author;
        h2.className = "headtxt";
        const p = document.createElement("p");
        p.textContent =
          " Perfectly extracted, this short, aromatic, intense drink contains all the best flavor from our coffee beans.";

        rcont.appendChild(h2);
        rcont.appendChild(p);
        lcont.appendChild(img3);
        con.appendChild(lcont);
        con.appendChild(rcont);
        container.appendChild(con);
        const con2 = document.createElement("div");
        con2.className = "menu-item-container";
        const lcont2 = document.createElement("div");
        lcont2.className = "left-container";
        const head2 = document.createElement("h2");
        const ran1 = Math.floor(Math.random() * 25);
        head2.textContent = data[ran1].author;
        const p2 = document.createElement("p");
        p2.textContent =
          " Perfectly extracted, this short, aromatic, intense drink contains all the best flavour from our coffee beans.";

        const rcont2 = document.createElement("div");
        rcont2.className = "right-container";
        const img5 = document.createElement("img");
        img5.src = data[ran1].download_url;
        img5.id = "foodimg";
        container.appendChild(con2);
        con2.appendChild(rcont2);
        con2.appendChild(lcont2);
        rcont2.appendChild(head2);
        rcont2.appendChild(p2);
        lcont2.appendChild(img5);
        }
       // createImageFirstDivision();

        

        // const allergenContainer = document.getElementById("allergen-container");
        // const allergenLeftContainer=document.createElement(div);
        // allergenLeftContainer.className="allergen-left-container";
        // const allergenimg=document.createElement("img");
        // allergenimg.src=data[5].download_url;
        // allergenimg.id="allergenimg";
        // const allergenRightContainer=document.createElement(div);
        // allergenRightContainer.className="allergen-right-container";
        // const p3 = document.createElement("p");
        // p3.textContent =
        //   " Perfectly extracted, this short, aromatic, intense drink contains all";
        //   allergenContainer.appendChild(allergenLeftContainer);
        //   allergenContainer.appendChild(allergenRightContainer);



      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  // function createImageFirstDivision() {
  //   var whole_body_container = document.querySelector(".whole-body-container");
  //   for (i = 1; i <= 1; i++) {
  //     console.log("hi");
  //     var middle_body_container = document.createElement("div");
  //     middle_body_container.classList.add("middle-body-container");
  //     var our_coffee_leftDiv = document.createElement("div");
  //     our_coffee_leftDiv.classList.add("our-coffee-leftDiv");
  //     var coffeeHistory_image = document.createElement("img");
  //     const imageElement = document.createElement("img");
  //     imageElement.src = data[Math.floor(Math.random() * 29)].download_url;
  //     imageElement.alt = "User Image";
  //     coffeeHistory_image = imageElement;
  //     coffeeHistory_image.classList.add("our_coffee_img");

  //     var our_coffee_rightDiv = document.createElement("div");
  //     our_coffee_rightDiv.classList.add("our-coffee-rightDiv");
  //     var our_coffee_title = document.createElement("h1");
  //     our_coffee_title.classList.add("our-coffee-title");
  //     our_coffee_title.textContent = "Our Coffee";
  //     var our_coffee_textDiv = document.createElement("div");
  //     our_coffee_textDiv.classList.add("our-coffee-textDiv");
  //     var our_coffee_text = document.createTextNode(
  //      "Our iconic Signature Blends are slow roasted for the perfect balance of rich flavour and smooth taste. We guarantee you the freshest taste and finest ingredients, every time. Check out our full range of drinks, snacks and meals and discover your favourites.");
  //     var our_coffee_menuButton = document.createElement("button");
  //     our_coffee_menuButton.classList.add("our-coffee-menuButton");
  //     our_coffee_menuButton.textContent = "Explore the full menu"; // Set the button text
  //     var our_coffee_buttonDiv = document.createElement("div");
  //     our_coffee_buttonDiv.classList.add("our-coffee-buttonDiv");
  //     our_coffee_menuButton.addEventListener("click", function () {
  //       var destinationURL = "https://example.com/another-page.html";
  //       window.location.href = destinationURL;
  //     });
  //     if (i % 2 == 0) {
  //       our_coffee_leftDiv.appendChild(coffeeHistory_image);
  //       our_coffee_rightDiv.appendChild(our_coffee_title);
  //       our_coffee_rightDiv.appendChild(our_coffee_textDiv);
  //       our_coffee_rightDiv.appendChild(our_coffee_buttonDiv);
  //     } else {
  //       our_coffee_rightDiv.appendChild(coffeeHistory_image);
  //       our_coffee_leftDiv.appendChild(our_coffee_title);
  //       our_coffee_leftDiv.appendChild(our_coffee_textDiv);
  //       our_coffee_leftDiv.appendChild(our_coffee_buttonDiv);
  //     }
  //     our_coffee_textDiv.appendChild(our_coffee_text);
  //     our_coffee_buttonDiv.appendChild(our_coffee_menuButton);
  //     middle_body_container.appendChild(our_coffee_leftDiv);
  //     middle_body_container.appendChild(our_coffee_rightDiv);
  //     whole_body_container.appendChild(middle_body_container);
  //     var blank_space_div = document.createElement("div");
  //     blank_space_div.classList.add("blank-space-div");
  //     whole_body_container.appendChild(blank_space_div);
  //   }
  //   // document.body.appendChild(middle_body_container);
  // }
  

  const cookieButton = document.getElementById("cookieButton");
  const acceptButton = document.getElementById("acceptButton");
  const cookieDialog = document.getElementById("cookieDialog");

  // Function to toggle the button state and show/hide the dialog
  function toggleButtonState() {
    if (cookieButton.classList.contains("open")) {
      closeCookieDialog();
    } else {
      openCookieDialog();
    }
  }

  function openCookieDialog() {
    cookieDialog.style.display = "block";
    cookieButton.classList.add("open");
  }

  function closeCookieDialog() {
    cookieDialog.style.display = "none";
    cookieButton.classList.remove("open");
  }

  acceptButton.addEventListener("click", function () {
    closeCookieDialog();
  });

  cookieButton.addEventListener("click", toggleButtonState);
});


