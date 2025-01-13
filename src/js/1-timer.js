// * Librarys
import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      iziToast.error({
        messageColor: 'rgba(225, 225, 225, 1)',
        messageSize: 16,
        messageLineHeight: 1.5,
        backgroundColor: 'rgba(239, 64, 64, 1)',
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

const onStartBtn = event => {
  if (!userSelectedDate) {
    return;
  }
  timer.deadline = userSelectedDate;
  timer.start();
  startBtn.disabled = true;
  dateTimePicker.disabled = true;
};

startBtn.addEventListener('click', onStartBtn);

const timer = {
  deadline: null,
  intervalId: null,
  elements: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },

  start() {
    this.intervalId = setInterval(() => {
      const ms = this.deadline - Date.now();

      if (ms <= 0) {
        this.stop();
        return;
      }
      const timeComponents = this.convertMs(ms);

      this.elements.days.textContent = this.addLeadingZero(timeComponents.days);
      this.elements.hours.textContent = this.addLeadingZero(
        timeComponents.hours
      );
      this.elements.minutes.textContent = this.addLeadingZero(
        timeComponents.minutes
      );
      this.elements.seconds.textContent = this.addLeadingZero(
        timeComponents.seconds
      );
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);

    dateTimePicker.disabled = false;
    startBtn.disabled = true;
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
};
