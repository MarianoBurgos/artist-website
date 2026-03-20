const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");
const triggers = document.querySelectorAll(".lightbox-trigger");

triggers.forEach(trigger => {
  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    lightbox.style.display = "block";
    lightboxImage.src = this.getAttribute("href");
    lightboxImage.alt = this.querySelector("img").alt;
  });
});

if (closeButton) {
  closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}