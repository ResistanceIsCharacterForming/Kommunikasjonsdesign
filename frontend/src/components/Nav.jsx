import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

    const toggleMenu = () => {
        const mainMenu = document.getElementById("main-menu")
        mainMenu.classList.toggle('active')
    }

    const handleScroll = () => {
        const nav = document.querySelector('nav')
        const mainMenu = document.getElementById("main-menu")
        let lastScrollY = window.scrollY
        
        if (!mainMenu.classList.contains('active')) {
            if (window.scrollY > lastScrollY) {
                nav.classList.add('hidden')
            } else {
                nav.classList.remove('hidden')
            }
        }

        lastScrollY = window.scrollY
    }

    useEffect(() => {
        const menuToggle = document.getElementById("menu-toggle")

        menuToggle.addEventListener('click', toggleMenu)
        window.addEventListener('scroll', handleScroll)

        return () => {
            menuToggle.removeEventListener('click', toggleMenu)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav>
            <h2><a href="index.html">FNTT</a></h2>
            <button id="menu-toggle" aria-label="meny">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul id="main-menu">
                <li><a href="index.html" id="home">Hjem</a></li>
                <li><a href="#">Våre artikler</a></li>
                <li><a href="#">Om oss</a></li>
                <li><a href="#">Kontakt oss</a></li>
            </ul>
        </nav>
    )
}
