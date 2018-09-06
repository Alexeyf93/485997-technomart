    var link = document.querySelector(".contacts-button");
		var popup = document.querySelector(".modal-login");
		var close = popup.querySelector(".modal-close");
		var form = popup.querySelector(".login-form");
		var login = popup.querySelector(".login-icon-user");
		var email = popup.querySelector(".login-icon-e-mail");
		var isStorageSupport = true;
  	var storage = "";

    var map = document.querySelector(".contacts-map");
    var popupmap = document.querySelector(".modal-map");
    var closemap = document.querySelector(".modal-map-close");

      
  		try {
    		storage = localStorage.getItem("login");
  		} catch (err) {
    		isStorageSupport = false;
  		}

		link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");

			if (storage) {
      			login.value = storage;
      			email.focus();
    		} else {
      			login.focus();
    		}
  		});

  		close.addEventListener("click", function (evt) {
    		evt.preventDefault();
    		popup.classList.remove("modal-show");
    		popup.classList.remove("modal-error");
  		});

  		form.addEventListener("submit", function (evt) {
    		if (!login.value || !email.value) {
      			evt.preventDefault();
      			popup.classList.remove("modal-error");
      			popup.offsetWidth = popup.offsetWidth;
      			popup.classList.add("modal-error");
    		}	else {
    			if (isStorageSupport) {
      			localStorage.setItem("login", login.value);
      			}
    		}
  		});

  		window.addEventListener("keydown", function (evt) {
    		if (evt.keyCode === 27) {
      			evt.preventDefault();
      		if (popup.classList.contains("modal-show")) {
        		popup.classList.remove("modal-show");
        		popup.classList.remove("modal-error");
      			}
    		}
  		});

      map.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupmap.classList.add("modal-map-show");
      });

      closemap.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupmap.classList.remove("modal-map-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
          if (popupmap.classList.contains("modal-map-show")) {
            popupmap.classList.remove("modal-map-show");
            }
        }
      });

      for (var product = document.querySelectorAll(".product-buy"), 
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

      

      

