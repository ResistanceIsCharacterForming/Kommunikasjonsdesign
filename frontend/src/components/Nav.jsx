import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function Nav() {
  const toggleMenu = () => {
    const mainMenu = document.getElementById("main-menu")
    mainMenu.classList.toggle("active")
  }

  const handleScroll = () => {
    const nav = document.querySelector("nav")
    const mainMenu = document.getElementById("main-menu")
    let lastScrollY = window.scrollY

    if (!mainMenu.classList.contains("active")) {
      if (window.scrollY > lastScrollY) {
        nav.classList.add("hidden")
      } else {
        nav.classList.remove("hidden")
      }
    }

    lastScrollY = window.scrollY
  }

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle")

    menuToggle.addEventListener("click", toggleMenu)
    window.addEventListener("scroll", handleScroll)

    return () => {
      menuToggle.removeEventListener("click", toggleMenu)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav>
      <h2>
        <Link to="/">FNTT</Link>
      </h2>
      <button id="menu-toggle" aria-label="meny">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul id="main-menu">
        <li>
          <Link to="/" id="home">
            Hjem
          </Link>
        </li>
        <li>
          <Link to="#">Våre artikler</Link>
        </li>
        <li>
          <Link to="#">Om oss</Link>
        </li>
        <li>
          <Link to="#">Kontakt oss</Link>
        </li>
      </ul>
    </nav>
  )
}
