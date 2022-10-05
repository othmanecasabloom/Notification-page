

const notification = document.querySelectorAll("[data-notif]");
const markBtn = document.querySelector ("[mark-btn]");

markBtn.addEventListener('click', function () {
    notification.classList.add('active');
});