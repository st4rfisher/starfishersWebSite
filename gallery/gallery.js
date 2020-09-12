var photos = [
  "gallery/photo-1.jpg",
  "gallery/photo-2.jpg",
  "gallery/photo-3.jpg",
  "gallery/photo-4.jpg"
];

var photoPreviews = document.querySelectorAll(".photo-preview");
var fullPhoto = document.querySelector(".full-photo");
var addPhotoPreviewClickHandler = function (photoPreviews, photo) {
  photoPreviews.addEventListener("click", function () {
    fullPhoto.src = photo;        
  });
}

for (var i = 0; i < photoPreviews.length; i++) {
  addPhotoPreviewClickHandler(photoPreviews[i], photos[i]);
}
