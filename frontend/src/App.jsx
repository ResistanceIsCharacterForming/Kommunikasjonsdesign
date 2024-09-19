import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import article1 from "./article1.json"

function App() {
  const [article, setArticle] = useState(null)

  article?.map((article) => {
    console.log(article)
    article.content.map((content) => {
      console.log(content)
    })
  })

  useEffect(() => {
    setArticle(article1)
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<h1>HER KOMMER ARTIKKEL</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
