import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// React 17
// ReactDOM.render(<App />, document.querySelector("#root"))

const container = document.getElementById("root")
const rootContainer = ReactDOM.createRoot(container)
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
