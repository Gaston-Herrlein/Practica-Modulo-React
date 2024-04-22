import LoginPage from "./pages/auth/LoginPage"
import { useAuth } from "./pages/auth/context.jsx"

function App() {
  const {isLogged} = useAuth()
  return (
    <>
    <LoginPage />
    {isLogged ? <LoginPage /> : <h1>SHOW ADS</h1>}
    </>
  )
}

export default App