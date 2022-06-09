import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// ReactDOM.render(<App />, document.querySelector("#root"))

const container = document.getElementById("root")
const rootContainer = ReactDOM.createRoot(container)
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
