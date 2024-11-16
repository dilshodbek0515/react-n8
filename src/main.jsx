import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from "./context/index.jsx"
import { reducer, inititalState } from "./context/reducer.js"
import { brm } from "number-brm"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StateProvider reducer={reducer} initialState={inititalState}>
      <App />
    </StateProvider>
  </BrowserRouter>,
)
