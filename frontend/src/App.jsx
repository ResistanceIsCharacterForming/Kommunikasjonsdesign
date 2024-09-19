import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import Card from "./components/Card"

function App() {
  const [article, setArticle] = useState(null)

  return (
    <Layout>
      <Card />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<h1>HER KOMMER ARTIKKEL</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
