import { useState } from "react";
import { login } from "./service.js";
import { useAuth } from "./context.jsx";
import { FormLogin } from "../components/FormLogin.jsx"
import Container from "react-bootstrap/Container";

export default function LoginPage() {
  const { onLogin } = useAuth();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleIsChequed = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({ email, password, remember: isChecked });
    onLogin();
  };

  const { email, password } = formValues;
  const buttonDisabled = !email || !password;
  return (
    <Container className="">
      <h1>Login to NodePop</h1>
      <FormLogin
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleIsChequed={handleIsChequed}
        buttonDisabled={buttonDisabled}
        email={email}
        password={password}
      />
    </Container>
  );
}

