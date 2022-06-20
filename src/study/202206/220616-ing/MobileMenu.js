const menuOpenBtn = document.querySelector(".mo_open")
const menuCloseBtn = document.querySelector(".mo_close")

const mo_menu = document.querySelector(".mo_menu")
const mo_bg = document.querySelector(".mo_bg")

menuOpenBtn.addEventListener('click', function() {
    mo_menu.classList.add("active")
    mo_bg.classList.add('active')
})

menuCloseBtn.addEventListener('click', function() {
    mo_menu.classList.remove("active")
    mo_bg.classList.remove('active')
})