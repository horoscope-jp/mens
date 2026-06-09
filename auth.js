const GAS_URL = 'https://script.google.com/macros/s/AKfycbwvsyWvAd35fG25nHbx4wp459pLwcOlKNVOJn3KFuC5X8m9Oys93w1mbsF0p742WeZw2w/exec';

const authScreen   = document.getElementById('auth-screen');
const appContainer = document.querySelector('.container');

const LS_KEY = 'auth_email';

function showApp() {
  authScreen.style.display = 'none';
  appContainer.hidden = false;
}

function showAuthScreen() {
  authScreen.style.display = 'flex';
  appContainer.hidden = true;
}

if (localStorage.getItem(LS_KEY)) {
  showApp();
} else {
  showAuthScreen();
}

const submitBtn  = document.getElementById('auth-submit-btn');
const emailInput = document.getElementById('auth-email');
const errorMsg   = document.getElementById('auth-error');

async function signIn() {
  const email = emailInput.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg.textContent = '正しいメールアドレスを入力してください';
    errorMsg.hidden = false;
    return;
  }

  localStorage.setItem(LS_KEY, email);

  fetch(GAS_URL, {
    method: 'POST',
    body: JSON.stringify({ email, appName: '美女の星占い' })
  }).catch(err => console.log('GAS送信エラー:', err));

  showApp();
}

submitBtn.addEventListener('click', signIn);

emailInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') signIn();
});
