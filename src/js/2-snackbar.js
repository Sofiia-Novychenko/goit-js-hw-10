import iziToast from 'izitoast';

const form = document.querySelector('.form');
const usersDelay = form.querySelector('input[name="delay"]');
const submitBtn = form.querySelector('button[type="submit"]');

const onSubmitBtn = event => {
  event.preventDefault();

  const delay = Number(usersDelay.value);
  const selectedRadioBtnValue = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedRadioBtnValue === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        messageColor: 'rgba(225, 225, 225, 1)',
        messageSize: 16,
        messageLineHeight: 1.5,
        backgroundColor: 'rgba(89, 161, 13, 1)',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        messageColor: 'rgba(225, 225, 225, 1)',
        messageSize: 16,
        messageLineHeight: 1.5,
        backgroundColor: 'rgba(239, 64, 64, 1)',
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  event.currentTarget.reset();
};

form.addEventListener('submit', onSubmitBtn);
