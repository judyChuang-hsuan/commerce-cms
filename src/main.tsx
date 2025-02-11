import { createRoot } from 'react-dom/client'
import 'virtual:uno.css'
import './style/common.css'
import './style/reset.css'
import { App } from './app'

createRoot(document.getElementById('root')!).render(<App />)
