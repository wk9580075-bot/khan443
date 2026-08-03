document.addEventListener('DOMContentLoaded', function () {

  const loginPage = document.getElementById('loginPage');
  const letterPage = document.getElementById('letterPage');

  const loginBtn = document.getElementById('loginBtn');
  const continueBtn = document.getElementById('continueBtn');

  const loginId = document.getElementById('loginId');
  const loginPass = document.getElementById('loginPass');
  const loginError = document.getElementById('loginError');

  const bgMusic = document.getElementById('bgMusic');

  function startMusic() {
    if (!bgMusic) return;

    bgMusic.volume = 0.5;

    bgMusic.play().catch(() => {});
  }

  function openLetterPage() {

    startMusic();

    loginPage.classList.remove('active');

    setTimeout(() => {
      letterPage.classList.add('active');
    }, 300);

  }

  function checkLogin() {

    const id = loginId.value.trim().toLowerCase();
    const pass = loginPass.value.trim().toLowerCase();

    if (id === 'chintu' && pass === 'i love you') {

      loginError.textContent = '';

      if (navigator.vibrate) {
        navigator.vibrate([20, 30, 20]);
      }

      openLetterPage();

    } else {

      loginError.textContent = 'Wrong ID or Password 💔';

      if (navigator.vibrate) {
        navigator.vibrate(120);
      }

    }

  }

  if (loginBtn) {
    loginBtn.addEventListener('click', checkLogin);
  }

  if (loginPass) {
    loginPass.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        checkLogin();
      }
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener('click', function () {

      letterPage.classList.remove('active');

      loginId.value = '';
      loginPass.value = '';
      loginError.textContent = '';

      setTimeout(() => {
        loginPage.classList.add('active');
      }, 300);

    });
  }

  const words = [
    'Love ❤️',
    'I Love You 💕',
    'Forever ♾️',
    'Miss You 🌸',
    'My Chutku 🥹',
    'Always Yours 💖'
  ];

  function createLoveWord(x, y) {

    const word = document.createElement('div');
    word.className = 'love-word';
    word.textContent = words[Math.floor(Math.random() * words.length)];

    word.style.left = x + 'px';
    word.style.top = y + 'px';

    document.body.appendChild(word);

    setTimeout(() => {
      word.remove();
    }, 1800);

  }

  document.addEventListener('touchstart', function (e) {

    if (!letterPage.classList.contains('active')) return;

    const t = e.touches[0];

    createLoveWord(t.clientX, t.clientY);

  }, { passive: true });

  document.addEventListener('click', function (e) {

    if (!letterPage.classList.contains('active')) return;

    createLoveWord(e.clientX, e.clientY);

  });

});