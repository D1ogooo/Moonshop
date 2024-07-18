import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routes/app.routes'
import { GlobalStyle } from './style/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <AppRouter />
   <GlobalStyle />
  </React.StrictMode>,
)
