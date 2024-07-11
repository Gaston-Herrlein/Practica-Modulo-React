import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { AuthContextProvider } from './pages/auth/context.jsx'
import storage from './utils/storage.js'
import { setAuthorizationHeader } from './api/client.js'

import 'bootstrap/dist/css/bootstrap.min.css'

const accessToken = storage.get('accessToken');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider isDefaultLogged={!!accessToken}>
        <App/>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
