var map;
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-search");
  const searchSection = document.querySelector(".search");
  const mapSection = document.querySelector(".map");

  let isSearchVisible = true;

  toggleButton.addEventListener("click", function () {
    if (isSearchVisible) {
      // Hide the search section
      searchSection.style.display = "none";
      mapSection.style.flex = 9.5; // Expand the map to full width
      // mapSection.style.width = "1080px";
    } else {
      // Show the search section
      searchSection.style.display = "block";
      mapSection.style.flex = 1;
      mapSection.style.width = "1080px";
      //mapSection.style.width = 150; // Restore the map width
    }
    isSearchVisible = !isSearchVisible;
  });

  // function changeToggleButtonText() {
  //   var button = document.getElementById("toggle-search");

  //   if (button.innerHTML === "&gt;") {
  //     button.innerHTML = "&lt;";
  //   } else {
  //     button.innerHTML = "&gt;";
  //   }
  // }

  map = L.map("map-section").setView([36.08, -86.6], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

});
fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var customIcon = L.icon({
      iconUrl:
        "https://images.ctfassets.net/27hc2gu70btq/4wCs01Cgbzv2gycua3IHfv/48e087bddc5ee9639d574ae291488069/storeSelected.svg",
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    const user = data.users; //name,location,distance
    user.forEach((element, index) => {
      console.log(element);
      var storescontainer = document.querySelector(".stores");
      var storescontainerdiv = document.createElement("div");
      storescontainerdiv.className = "store-item";
      var name = document.createElement("h2");
      var location = document.createElement("p");
      var distance = document.createElement("p");
      var breakline = document.createElement("hr");
      var addr = user[index].address;
      var latitude = user[index].address.coordinates.lat;
      var longitude = user[index].address.coordinates.lng;
      console.log(latitude, longitude);
      var markers = L.marker([latitude, longitude], { icon: customIcon }).addTo(
        map
      );
      name.textContent = `Costa-Coffee-${index + 1}`;
      location.textContent = user[index].address.address;
      distance.textContent = user[index].height;
      storescontainerdiv.addEventListener(
        "click",
        showstoredetails.bind(
          null,
          name.textContent,
          location.textContent,
          distance.textContent,
          latitude,
          longitude
        )
      );
      storescontainerdiv.appendChild(name);
      storescontainerdiv.appendChild(location);
      storescontainerdiv.appendChild(distance);
      storescontainerdiv.appendChild(breakline);
      storescontainer.appendChild(storescontainerdiv);
    });
  });
function showstoredetails(
  namepass,
  locationpass,
  distancepass,
  latitudepass,
  longitudepass
) {
  // Clear existing content
  document.querySelector(".stores").innerHTML = "";

  // Create elements for store details
  const name = document.createElement("h2");
  const location = document.createElement("p");
  const distance = document.createElement("p");

  // Populate store details
  name.textContent = namepass;
  location.textContent = locationpass;
  distance.textContent = distancepass;

  // Add store details to DOM
  const storesContainer = document.querySelector(".stores");
  storesContainer.appendChild(name);
  storesContainer.appendChild(location);
  storesContainer.appendChild(distance);

  // Create a div for the newsletter subscription form
  const newsletterDiv = document.createElement("div");
  newsletterDiv.className = "newsletter-form";

  // Create heading for the newsletter
  const newsletterHeading = document.createElement("h2");
  newsletterHeading.textContent = "Subscribe to our newsletter";

  // Create form elements
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Enter your email";
  emailInput.id = "subscribe-email";

  const subscribeButton = document.createElement("button");
  subscribeButton.textContent = "Subscribe";
  subscribeButton.addEventListener("click", function () {
    // Validate email format
    const email = emailInput.value;
    if (validateEmail(email)) {
      alert(`Successfully subscribed with email: ${email}`);
    } else {
      alert("Invalid email format. Please enter a valid email address.");
    }
  });

  // Add form elements to the newsletter div
  newsletterDiv.appendChild(newsletterHeading);
  newsletterDiv.appendChild(emailInput);
  newsletterDiv.appendChild(subscribeButton);

  // Add newsletter div to the DOM
  storesContainer.appendChild(newsletterDiv);

  // Update map
  map.panTo([latitudepass, longitudepass]);
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function Locateme() {
  if ("geolocation" in navigator) {
    // Request the user's current location
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Create a marker for the user's current location with the custom icon
      var userLocationMarker = L.marker([latitude, longitude]).addTo(map);

      // Set the view of the map to the user's location
      map.setView([latitude, longitude], 13);
    });
  } else {
    alert("Geolocation is not available in your browser");
  }
}

document.getElementById("search-button").addEventListener("click", function () {
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  console.log(searchInput);
  searchStores(searchInput);
});
function searchStores(keyword) {
  var storesContainer = document.querySelector(".stores");
  var storeItems = storesContainer.getElementsByClassName("store-item");

  // Hide all store items
  for (var i = 0; i < storeItems.length; i++) {
    storeItems[i].style.display = "none";
  }

  // Display matching store items
  for (var i = 0; i < storeItems.length; i++) {
    var storeName = storeItems[i].querySelector("h2").textContent.toLowerCase();
    var storeLocation = storeItems[i]
      .querySelector("p")
      .textContent.toLowerCase();

    if (storeName.includes(keyword) || storeLocation.includes(keyword)) {
      storeItems[i].style.display = "block";
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var filterButton = document.getElementById("show-filter-form");
  var filterForm = document.querySelector(".filter-form");

  if (filterButton && filterForm) {
    filterButton.addEventListener("click", function () {
      filterForm.style.display =
        filterForm.style.display === "none" || filterForm.style.display === ""
          ? "block"
          : "none";
    });
  }
  // Handle the apply filter button click
  document
    .getElementById("apply-filter")
    .addEventListener("click", function () {
      // Retrieve selected filter options and perform actions
      var selectedFilterType = document.getElementById("filter-type").value;

      // Perform actions based on the selected filter options
      console.log("Filter Type:", selectedFilterType);

      // Pass the selected filter type to the searchStores function
      searchStores(selectedFilterType);
    });
});
