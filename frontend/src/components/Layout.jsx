import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
        <section id="head">
            <h1>Alt om Alt</h1>
            <p>Informativ tekst</p>
        </section>
      </header>
      <main>{children}</main>
    </>
  )
}
