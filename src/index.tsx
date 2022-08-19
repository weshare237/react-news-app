import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import NewsProvider from './context/NewsProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>
)
