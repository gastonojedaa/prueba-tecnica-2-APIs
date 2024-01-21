import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import './src/index.css'

const root = createRoot(document.getElementById('app')) // es la app del index.html. Desde ahi quiero renderizar mi aplicacion
root.render(<App />)
