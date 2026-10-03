const toggle = document.querySelector('#language');
function setLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-en][data-zh]').forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  toggle.textContent = language === 'en' ? '中文' : 'EN';
  toggle.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换为英文');
  document.title = language === 'en' ? 'E1ev3n. | Dynamics & Observation' : 'E1ev3n. | 动力学与观测';
  try { localStorage.setItem('homepage-language', language); } catch {}
}
toggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('homepage-language') === 'zh') setLanguage('zh'); } catch {}
