function setRandomImage() {
  fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * 29);
      const randomImageURL = data[randomIndex].download_url;

      console.log(randomImageURL);

      // Set the random image as the source for the element with id "nav-background-image"
      document.getElementById("nav-background-image").src = randomImageURL;

      // Call setRandomImage again after 3 seconds
      setTimeout(setRandomImage, 3000);
    })
    .catch((error) => console.error("Error:", error));
}

// Initial call to setRandomImage to start the cycle
setRandomImage();
