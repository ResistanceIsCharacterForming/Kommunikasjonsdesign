const menuToggle = document.getElementById("menu-toggle")

menuToggle.addEventListener('click', () => {
    const mainMenu = document.getElementById("main-menu")
    mainMenu.classList.toggle('active')
})

let lastScrollY = window.scrollY

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    const mainMenu = document.getElementById("main-menu")
    
    if (!mainMenu.classList.contains('active')) {
        if (window.scrollY > lastScrollY) {  
            nav.classList.add('hidden')
        } else {
            nav.classList.remove('hidden')
        }
    }

    lastScrollY = window.scrollY
})