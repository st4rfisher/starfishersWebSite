var initImgNumber = 0; //устанавливаем начальное значение счетчика

(function gallery() {
  var leftSlider = document.getElementById("left-slider"),
    rigthSlider = document.getElementById("right_arrow");

  thumbnails = document.querySelectorAll(".thumbnail");

  maxImgNum = thumbnails.length; //устанавливаем конечное значение счетчика, 
                                 //равное количеству элементов в массиве
  leftSlider.addEventListener("click", function () { //вызов функции navigation с параметром -1 при нажатии на левый слайдер
    navigation(-1);                                  
  });

  rigthSlider.addEventListener("click", function () { //вызов функции navigation с параметром 1 при нажатии на правый слайдер
    navigation(1);
  });

  for (var i = 0; i < thumbnails.length; i++) { // вызов функции clickThumb при клике на миниатюру
    thumbnails[i].addEventListener("click", clickThumb);
  }
})();

function clickThumb(event) {
  showImage(this.dataset.fullUrl); // вызов функции showImage с параметром, равным полю data-full-url миниатюры
}

//навигация по слайдерам
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
