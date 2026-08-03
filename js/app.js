document.addEventListener('DOMContentLoaded', function () {
const bgMusic = document.getElementById('bgMusic');

// Browser autoplay block ko handle karega
function startMusic() {
  const bgMusic = document.getElementById('bgMusic');

  if (!bgMusic) {
    console.log('Audio element not found');
    return;
  }

  bgMusic.volume = 0.6;

  bgMusic.play().then(() => {
    console.log('Music started');
  }).catch((err) => {
    console.log('Play failed:', err);
  });
}

// Login successful hone par music start
  const loginPage = document.getElementById('loginPage');
  const letterPage = document.getElementById('letterPage');

  const loginBtn = document.getElementById('loginBtn');
  const loginId = document.getElementById('loginId');
  const loginPass = document.getElementById('loginPass');
  const loginError = document.getElementById('loginError');

  function openLetterPage() {
    loginPage.classList.remove('active');

    setTimeout(function () {
      letterPage.classList.add('active');
    }, 300);
  }
function checkLogin() {

  const id = loginId.value.trim().toLowerCase();
  const pass = loginPass.value.trim().toLowerCase();

  const validId = 'chintu';
  const validPass = 'i love you';

  if (id === validId && pass === validPass) {

    loginError.textContent = '';

    if (navigator.vibrate) {
      navigator.vibrate([20, 30, 20]);
    }
function openLetterPage() {
  startMusic();

  loginPage.classList.remove('active');

  setTimeout(() => {
    letterPage.classList.add('active');
  }, 300);
}
    // Open next page
    openLetterPage();

  } else {

    loginError.textContent = 'Wrong ID or Password 💔';

    loginError.animate(
      [
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-6px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(0px)' }
      ],
      {
        duration: 300
      }
    );

    if (navigator.vibrate) {
      navigator.vibrate(120);
    }

  }

}

  // Open button
  continueBtn.addEventListener('click', function () {

  if (navigator.vibrate) {
    navigator.vibrate([20,40,20]);
  }

  // Letter page hide
  letterPage.classList.remove('active');

  // Reset login fields
  loginId.value = '';
  loginPass.value = '';
  loginError.textContent = '';

  // Login page show
  setTimeout(function () {
    loginPage.classList.add('active');
  }, 400);

});

  // Enter key
  loginPass.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      checkLogin();
    }
  });

  // Floating love words
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
    word.textContent =
      words[Math.floor(Math.random() * words.length)];

    word.style.left = x + 'px';
    word.style.top = y + 'px';

    document.body.appendChild(word);

    setTimeout(function () {
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