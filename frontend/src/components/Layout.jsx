import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024</p>
      </footer>
    </>
  )
}
