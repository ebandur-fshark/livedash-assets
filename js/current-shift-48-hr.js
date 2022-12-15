const COUNTDOWN_DATETIME="December 26, 9999 06:00:00";

function setCurrentShiftColor(shiftNumber) {
  const shiftColor = ["a", "a", "c", "c", "b", "b"][shiftNumber];

  document.querySelector(`#${shiftColor}`).classList.add('active', `shift-${shiftColor}`);
}

function setActiveBox() {

  const today = new Date();
  const now = today.getTime();

  const countDownDate = new Date(COUNTDOWN_DATETIME).getTime();
  const timeLeft = countDownDate - now;

  const daysLeftOver = Math.floor(timeLeft / (1000 * 60 * 60 * 24) % 6);
  console.log(daysLeftOver);
  setCurrentShiftColor(daysLeftOver);

}
setActiveBox();