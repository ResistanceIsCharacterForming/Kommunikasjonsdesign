import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./article1.css"
import "./article2.css"
import { BrowserRouter as Router } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <Router basename="/Kommunikasjonsdesign/">
    <App />
  </Router>
)
