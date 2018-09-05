	var product = document.querySelector(".catalog-buy");
    var popupbuy = document.querySelector(".modal-buy");
    var closebuy = document.querySelector(".modal-buy-close");

    product.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupbuy.classList.add("modal-buy-show");
      });

      closebuy.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupbuy.classList.remove("modal-buy-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
          if (popupbuy.classList.contains("modal-buy-show")) {
            popupbuy.classList.remove("modal-buy-show");
            }
        }
      });