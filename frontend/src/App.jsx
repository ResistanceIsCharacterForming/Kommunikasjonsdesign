import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import "./App.css"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
