import "./slider";
import modal from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import showImg from "./modules/showImg";

window.addEventListener("DOMContentLoaded", () => {
  let modalState = { form: 0 };
  changeModalState(modalState);

  const deadline = "2020-06-17";

  modal();
  setTimeout(() => {
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  }, 0);

  setTimeout(() => {
    tabs(
      ".decoration_slider",
      ".no_click",
      ".decoration_content>div>div",
      "after_click",
    );
  }, 0);

  setTimeout(() => {
    tabs(
      ".balcon_icons",
      ".balcon_icons_img",
      ".big_img>img",
      "do_image_more",
      "inline",
    );
  }, 0);
  forms(modalState);
  timer("#timer", deadline);
  showImg();
});
