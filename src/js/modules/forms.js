import checkNumInputs from "./chekNuminput";

const forms = (state) => {
  const forms = document.querySelectorAll(".form"),
    inputs = document.querySelectorAll("input");

  checkNumInputs('input[name="user_phone"]');
  /*   phoneInputs.forEach((phoneInput) => {
    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/, "");
    });
  }); */

  const messageStatus = {
    loading: "Загрузка...",
    fail: "Ошибка",
    success: "Спасибо! Скоро мы с вами свяжемся",
  };

  const postDate = async (data, url) => {
    document.querySelector(".status").textContent = messageStatus.loading;
    const resData = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await resData.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => (input.value = ""));
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const messageStatus = document.createElement("div");
      messageStatus.classList.add("status");
      form.appendChild(messageStatus);
      const formData = new FormData(form);

      if (form.getAttribute("data-calc") == "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
        state = "";
      }

      /*       postDate(formData, "assets/server.php")
        .then(() => {
          document.querySelector(".status").textContent = messageStatus.success;
        })
        .catch(() => {
          document.querySelector(".status").textContent =
            messageStatus.sucfailcess;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            messageStatus.remove();
          }, 5000);
        }); */
    });
  });
};

export default forms;
