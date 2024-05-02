import { useState } from 'react';
import { register } from './service.js';
import { useAuth } from './context.jsx';

export default function LoginPage() {
  const { onLogin } = useAuth();

  const [formValues, setFormValues] = useState({
    username: '',
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
    await register({username, password, remember: isChecked});
    onLogin();
  };

  const { username, password } = formValues;
  const buttonDisabled = !username || !password;
  return (
    <div>
      <h1>Sign up for NodePop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="email"
          value={username}
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
        <button type='submit' disabled={buttonDisabled}>Sign up</button>
      </form>
    </div>
  );
}
