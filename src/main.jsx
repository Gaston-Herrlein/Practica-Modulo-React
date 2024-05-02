import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { AuthContextProvider } from './pages/auth/context.jsx'
import storage from './utils/storage.js'
import { setAuthorizationHeader } from './api/client.js'

import 'bootstrap/dist/css/bootstrap.min.css'

const accessToken = storage.get('auth');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider isDefaultLogged={!!accessToken}>
      <App/>
    </AuthContextProvider>
  </React.StrictMode>,
)
