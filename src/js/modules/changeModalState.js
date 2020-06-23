import checkNumInputs from "./chekNuminput";
const changeModalState = (state) => {
  const windowsDesign = document.querySelectorAll(".balcon_icons_img"),
    windowsWidth = document.querySelectorAll("#width"),
    windowsHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowsProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElem(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              state[prop] = i === 0 ? "cold" : "wet";

              elem.forEach((itemCheckbox, j) => {
                itemCheckbox.checked = false;

                if (i == j) {
                  itemCheckbox.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        /*       item.nodeName;

        state[prop] = i;
        console.log(state, "s"); */
      });
    });
  }
  bindActionToElem("click", windowsDesign, "form");
  bindActionToElem("input", windowsWidth, "width");
  bindActionToElem("input", windowsHeight, "height");
  bindActionToElem("change", windowsProfile, "profile");
  bindActionToElem("change", windowType, "type");
};

export default changeModalState;
