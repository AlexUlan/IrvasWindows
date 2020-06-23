const timer = (id, deadLine) => {
  const addZero = (number) => {
    return number > 9 ? number : "0" + number;
  };

  const gerTimeRemaining = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date());

    const second = Math.floor((t / 1000) % 60),
      minut = Math.floor((t / 1000 / 60) % 60),
      hour = Math.floor((t / (1000 * 60 * 60)) % 24),
      day = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      seconds: second,
      minuts: minut,
      hour: hour,
      day: day,
    };
  };

  const setClock = (timerSelector, endTime) => {
    const timerContainer = document.querySelector(timerSelector);

    const secondsElem = timerContainer.querySelector("#seconds");
    const minutsElem = timerContainer.querySelector("#minutes");
    const hoursElem = timerContainer.querySelector("#hours");
    const daysElem = timerContainer.querySelector("#days");
    const timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
      const time = gerTimeRemaining(endTime);
      secondsElem.innerText = addZero(time.seconds);
      minutsElem.innerText = addZero(time.minuts);
      hoursElem.innerText = addZero(time.hour);
      daysElem.innerText = addZero(time.day);
      if (time.total <= 0) {
        clearInterval(timerInterval);
        secondsElem.innerText = "00";
        minutsElem.innerText = "00";
        hoursElem.innerText = "00";
        daysElem.innerText = "00";
      }
    }
    updateTimer();
  };
  setClock(id, deadLine);
};

export default timer;
