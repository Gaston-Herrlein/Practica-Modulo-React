import { useState } from 'react';
import { Button } from '../../components/Button.jsx';
import { login } from './service.js';
import { useAuth } from './context.jsx';

export default function LoginPage() {
  const { onLogin } = useAuth();

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleChange = event => {
    setFormValues(currentFormValues => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // const response = await login(formValues);
    await login(formValues);

    onLogin();
  };

  const { username, password, remember } = formValues;
  const buttonDisabled = !username || !password;
  return (
    <div>
      <h1>Log in to NodePop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="">
          <span>Remember</span>
          <input type="checkbox" name="remember password" value={remember}
            onChange={handleChange}/>
        </label>
          {/**TENGO PROBLEMAS IMPORTANDO EL COMPONENTE BUTTON */}
        <Button type={"submit"} disabled={buttonDisabled} message={"Login"} />
      </form>
    </div>
  );
}
