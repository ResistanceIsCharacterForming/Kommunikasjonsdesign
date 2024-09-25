import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import Article1 from "./pages/article1"

function App() {
  const [article, setArticle] = useState(null)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<h3>HER KOMMER ALLE ARTIKLENE</h3>} />
        <Route path="/articles/article1" element={<Article1 />} />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </Layout>
  )
}

export default App
