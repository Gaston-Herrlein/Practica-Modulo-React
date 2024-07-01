import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage.jsx"
import { Header } from "./pages/components/Header.jsx"
import { useAuth } from "./pages/auth/context.jsx"
import { AdsMainPage } from "./pages/ads/AdsMainPage.jsx"
import { Container } from "react-bootstrap"

function App() {
  const {isLogged} = useAuth()
  return (
    <>
    <Header />
    <Container className="center">
      <AdsMainPage />
    </Container>
    {/* <LoginPage /> */}
    {/* <RegisterPage /> */}
    {isLogged ? <RegisterPage /> : <h1>SHOW ADS</h1>}
    </>
  )
}

export default App