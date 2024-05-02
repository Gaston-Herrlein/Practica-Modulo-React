import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage.jsx"
import { Header } from "./pages/components/Header.jsx"
import { useAuth } from "./pages/auth/context.jsx"

function App() {
  const {isLogged} = useAuth()
  return (
    <>
    <Header />
    <RegisterPage />
    {isLogged ? <LoginPage /> : <h1>SHOW ADS</h1>}
    </>
  )
}

export default App