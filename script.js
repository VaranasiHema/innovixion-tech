function startCountdown() {
  //Input the target date to set count down.
  const targetDateInput = document.getElementById('date');
  const targetDate = new Date(targetDateInput.value).getTime();
  //Condition for checking the target date is not a number.
  if (isNaN(targetDate)) {
    alert('Please select a valid date and time.');
    return;
  }
  //Constant time & date of current day.
  const countdownElement = document.getElementById('timer');

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    //Checking if the target is already over or not.
    if (distance <= 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = 'Countdown over!';
      return;
    }
    //Calculating the date,time in hours,min,sec from current time to target time and returns a countdown.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s;
    }, 1000);
}