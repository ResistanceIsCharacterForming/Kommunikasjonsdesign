import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <span>&copy; FNTT Kommunikasjonsdesign Høst 2024 (Gruppe 13)</span>
      </footer>
    </>
  )
}
