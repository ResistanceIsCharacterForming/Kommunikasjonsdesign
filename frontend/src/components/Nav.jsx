import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
  const navItems = [
    {
      name: "Hjem",
      url: "/",
    },
    {
      name: "Om oss",
      url: "/about",
    },
    {
      name: "Kontakt oss",
      url: "/contact",
    },
  ]

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

  const location = useLocation()

  return (
    <nav>
      <h2>
        <Link to="/">FNTT</Link>
      </h2>
      <button id="menu-toggle" aria-label="meny">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul id="main-menu">
        {navItems?.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              className={location.pathname === item.url ? "active" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
