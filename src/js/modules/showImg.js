const showImg = () => {
  const popupImg = document.createElement("div"),
    containerWorks = document.querySelector(".works"),
    bigImg = document.querySelector("img");

  popupImg.classList.add("popup");
  containerWorks.appendChild(popupImg);
  popupImg.style.justifyContent = "center";
  popupImg.style.alignItems = "center";
  popupImg.style.display = "none";

  containerWorks.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target && target.classList.contains("preview")) {
      popupImg.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
      popupImg.appendChild(bigImg);
      document.body.style.overflow = "hidden";
    }
    if (target && target.matches("div.popup")) {
      popupImg.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
};

export default showImg;
