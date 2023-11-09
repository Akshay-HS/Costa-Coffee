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
  var customIcon = L.icon({
    iconUrl:
      "https://images.ctfassets.net/27hc2gu70btq/4wCs01Cgbzv2gycua3IHfv/48e087bddc5ee9639d574ae291488069/storeSelected.svg",
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  map = L.map("map-section").setView([10.29, 76.25], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker with the custom icon to the map
  var marker = L.marker([10.29, 76.25], { icon: customIcon }).addTo(map);
  var marker1 = L.marker([10.3, 76.25], { icon: customIcon }).addTo(map);
  var marker2 = L.marker([10.31, 76.26], { icon: customIcon }).addTo(map);
  var marker3 = L.marker([10.32, 76.3], { icon: customIcon }).addTo(map);
  var marker4 = L.marker([10.33, 76.28], { icon: customIcon }).addTo(map);
  var marker5 = L.marker([10.34, 76.29], { icon: customIcon }).addTo(map);
});
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
function changeToggleButtonText() {
  var button = document.getElementById("toggle-search");

  if (button.innerHTML === "&gt;") {
    button.innerHTML = "&lt;";
  } else {
    button.innerHTML = "&gt;";
  }
}
fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const user = data.users; //name,location,distance
    user.slice(0, 5).forEach((element, index) => {
      console.log(element);
      var storescontainer = document.querySelector(".stores");
      var storescontainerdiv = document.createElement("div");
      var name = document.createElement("h2");
      var location = document.createElement("p");
      var distance = document.createElement("p");
      name.textContent = `Costa-Coffee-${index + 1}`;
      location.textContent = user[index].address.address;
      distance.textContent = user[index].height;
      storescontainerdiv.appendChild(name);
      storescontainerdiv.appendChild(location);
      storescontainerdiv.appendChild(distance);
      storescontainer.appendChild(storescontainerdiv);
    });
  });
