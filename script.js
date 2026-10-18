const statusMessage = document.querySelector('#status');
const themeButton = document.querySelector('#themeBtn');

document.querySelector('#helloBtn').addEventListener('click', () => {
  statusMessage.textContent = 'Hello from GitHub Pages! เว็บไซต์พร้อมใช้งานแล้ว';
});

themeButton.addEventListener('click', (event) => {
  event.preventDefault();
  const isDarkTheme = document.body.classList.toggle('dark-theme');
  themeButton.textContent = isDarkTheme ? 'ใช้ธีมสว่าง' : 'เปลี่ยนธีม';
});
