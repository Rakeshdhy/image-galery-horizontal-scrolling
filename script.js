let galleryContainer = document.querySelector(".gallery");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

galleryContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  galleryContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
  galleryContainer.style.scrollBehavior = "smooth";
  galleryContainer.scrollLeft += 300;
});

prevBtn.addEventListener("click", () => {
  galleryContainer.style.scrollBehavior = "smooth";
  galleryContainer.scrollLeft -= 300;
});
