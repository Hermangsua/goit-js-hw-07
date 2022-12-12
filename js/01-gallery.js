import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// console.log(gallery);
// console.log(creategalleryMarkUp(galleryItems));
const galleryMarkUp = creategalleryMarkUp(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkUp);
function creategalleryMarkUp(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

gallery.addEventListener(`click`, whatchPicture);
function whatchPicture(evt) {
  evt.preventDefault();
  const isGalleryDiv = evt.target.classList.contains("gallery__image");
  //   console.log(isGalleryDiv);
  if (!isGalleryDiv) {
    return;
  }
  //   console.log(evt.target.dataset.source);
  const focusImage = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${focusImage}" width="800" height="600">
`);
  instance.show();

  const esclick = (e) => {
    if (e.key === "Escape") {
      instance.close();
      gallery.removeEventListener("keydown", esclick);
    }
  };
  gallery.addEventListener("keydown", esclick);
}
