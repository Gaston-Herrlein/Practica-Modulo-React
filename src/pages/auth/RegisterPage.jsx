import { useState } from 'react';
import { register } from './service.js';
import { useAuth } from './context.jsx';
import { FormRegister } from '../components/FormRegister.jsx'
import Container from 'react-bootstrap/Container';

export default function RegisterPage() {
  const { onLogin } = useAuth();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    username: '',
    name: ''
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
    await register({email, password, username, name, remember: isChecked});
    onLogin();
  };

  const { email, password, username, name } = formValues;
  const buttonDisabled = !email || !password || !username || !name;
  return (
    <Container className="">
      <h1>Sign up to NodePop</h1>
      <FormRegister
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleIsChequed={handleIsChequed}
        buttonDisabled={buttonDisabled}
        email={email}
        password={password}
      />
    </Container>


    // <div>
    //   <h1>Sign up for NodePop</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="User Name"
    //       value={username}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Full Name"
    //       value={name}
    //       onChange={handleChange}
    //     />
    //     <label>
    //       <span>Remember</span>
    //       <input type="checkbox" name="isChequed" checked={isChecked}
    //         onChange={handleIsChequed}/>
    //     </label>
    //     <button type='submit' disabled={buttonDisabled}>Sign up</button>
    //   </form>
    // </div>
  );
}
