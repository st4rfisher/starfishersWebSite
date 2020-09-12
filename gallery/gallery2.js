var initImgNumber = 0; //устанавливаем начальное значение счетчика

(function gallery() {
  var leftSlider = document.getElementById("left-slider"),
    rigthSlider = document.getElementById("right_arrow");

  thumbnails = document.querySelectorAll(".mini");

  maxImgNum = thumbnails.length;

  leftSlider.addEventListener("click", function () {
    navigation(-1);
  });
  rigthSlider.addEventListener("click", function () {
    navigation(1);
  });

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", clickThumb);
  }
})();

function clickThumb(event) {
  showImage(this.dataset.fullUrl);
}

// нам не нужны две практически одинаковые функции для навигации
// используем одну функцию с параметром
function navigation(direction) {
  initImgNumber += direction;
  if (initImgNumber < 0) {
    initImgNumber = maxImgNum - 1;
  } else if (initImgNumber >= maxImgNum) {
    initImgNumber = 0;
  }
  showImage(thumbnails[initImgNumber].getAttribute("data-full-url"));
}

// устанавливаем изображение и подсвечиваем миниатюру
function showImage(path) {
  var image = document.getElementById("mainImage");
  image.setAttribute("src", path);
  for (var i = 0; i < maxImgNum; i++) {
    if (thumbnails[i].getAttribute("data-full-url") != path) {
      thumbnails[i].classList.remove("active");
    } else {
      thumbnails[i].classList.add("active");
      initImgNumber = i;
    }
  }
}
