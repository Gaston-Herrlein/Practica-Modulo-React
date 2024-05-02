import { useState } from 'react';
import { login } from './service.js';
import { useAuth } from './context.jsx';

export default function LoginPage() {
  const { onLogin } = useAuth();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [isChecked, setIsChecked] = useState (false)

  const handleChange = event => {
    setFormValues(currentFormValues => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleIsChequed = () => {
    setIsChecked(!isChecked);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    await login({email, password, remember: isChecked});
    onLogin();
  };

  const { email, password } = formValues;
  const buttonDisabled = !email || !password;
  return (
    <div>
      <h1>Login to NodePop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <label>
          <span>Remember</span>
          <input type="checkbox" name="isChequed" checked={isChecked}
            onChange={handleIsChequed}/>
        </label>
        <button type='submit' disabled={buttonDisabled}>Login</button>
      </form>
    </div>
  );
}
