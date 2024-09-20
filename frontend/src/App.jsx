import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import Card from "./components/Card"

function App() {
  const [article, setArticle] = useState(null)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<h3>HER KOMMER ALLE ARTIKLENE</h3>}>
          <Route
            path="/articles/article"
            element={
              <h3>
                HER KOMMER DET <strong>EN</strong> ARTIKKEL
              </h3>
            }
          />
        </Route>
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </Layout>
  )
}

export default App
