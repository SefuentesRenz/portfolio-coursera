const themeBtn = document.getElementById('theme-btn') as HTMLButtonElement;

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
}
