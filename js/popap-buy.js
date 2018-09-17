for (var product = document.querySelectorAll(".catalog-buy"), 
    	popupbuy = document.querySelector(".modal-buy"), 
    	closebuy = document.querySelector(".modal-buy-close"),
    	continue_shopping = document.querySelector(".right-button"), 
    	i = 0; i < product.length; i++)
  	product[i].addEventListener("click", function(t) {
      t.preventDefault(),
      popupbuy.classList.add("modal-buy-show")
  });

  closebuy.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupbuy.classList.remove("modal-buy-show");
  });

  continue_shopping.addEventListener("click", function (evt) {
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