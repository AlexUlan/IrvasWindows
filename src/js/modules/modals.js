const modal = () => {
  function bindModal(trigerSelecter, popupSelector, closeSelector) {
    const triger = document.querySelectorAll(trigerSelecter),
      popup = document.querySelector(popupSelector),
      close = document.querySelector(closeSelector);

    triger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
          popup.style.display = "block";
          /* document.body.style.overflow = "hiden"; */
          //bootstrap
          document.body.classList.add("modal-open");
        }
      });
    });

    close.addEventListener("click", () => {
      popup.style.display = "none";
      /*   document.body.style.overflow = ""; */
      document.body.classList.remove("modal-open");
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
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

  //showpopupByTime(".popup", 60000);
};

export default modal;
