import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Article1 from "./pages/article1"
import Article2 from "./pages/article2"
import Article4 from "./pages/article4"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<h3>HER KOMMER ALLE ARTIKLENE</h3>} />
        <Route path="/articles/article1" element={<Article1 />} />
        <Route path="/articles/article2" element={<Article2 />} />
        <Route path="/articles/article4" element={<Article4 />} />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </Layout>
  )
}

export default App
