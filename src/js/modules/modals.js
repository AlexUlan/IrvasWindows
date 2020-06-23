const modal = () => {
  function bindModal(
    trigerSelecter,
    popupSelector,
    closeSelector,
    closeClickOverlay = true,
  ) {
    const triger = document.querySelectorAll(trigerSelecter),
      popup = document.querySelector(popupSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    triger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((i) => {
          i.style.display = "none";
        });

        popup.style.display = "block";
        /* document.body.style.overflow = "hiden"; */
        //bootstrap
        document.body.classList.add("modal-open");
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });
      popup.style.display = "none";
      /*   document.body.style.overflow = ""; */
      document.body.classList.remove("modal-open");
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        popup.style.display = "none";
        /*  document.body.style.overflow = ""; */
        document.body.classList.remove("modal-open");
      }
    });
  }

  function showpopupByTime(popupSelector, timeSnow) {
    setTimeout(() => {
      document.querySelector(popupSelector).style.display = "block";
    }, timeSnow);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close",
  );

  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");

  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false,
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false,
  );

  //showpopupByTime(".popup", 60000);
};

export default modal;
