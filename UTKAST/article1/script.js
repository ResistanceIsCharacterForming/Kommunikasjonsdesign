const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("main-menu")

menuToggle.addEventListener('click', function(event) {
    event.preventDefault()

    menu.classList.toggle('active')
})

