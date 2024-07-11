import { Routes, Route } from 'react-router-dom';

import LoginPage from "./pages/auth/LoginPage"
import { NewAdPage } from "./pages/ads/NewAdPage.jsx"
import { AdPage } from "./pages/ads/AdPage.jsx"
import { useAuth } from "./pages/auth/context.jsx"
import { AdsMainPage } from "./pages/ads/AdsMainPage.jsx"
import Layout from "./pages/components/Layout.jsx";

function App() {
  const {isLogged} = useAuth()
  return (
    <Routes>
      <Route
        path="/adverts"
        element={
          <>
            {isLogged ? <Layout /> : <LoginPage />}
          </>
        }
      >
        <Route index element={<AdsMainPage />} />
        <Route path="new" element={<NewAdPage />} />
        <Route path=":Id" element={<AdPage />} />
      </Route>
    </Routes>
  )
}

export default App