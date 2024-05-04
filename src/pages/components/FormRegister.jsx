import { Button, Form } from "react-bootstrap";

import PropTypes from 'prop-types';

export const FormRegister = ({
    handleSubmit,
    handleChange,
    handleIsChequed,
    buttonDisabled,
    email,
    password,
    username,
    name
  }) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We all never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter user name"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter you full name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="isChequed"
            label="Remember me"
            onChange={handleIsChequed}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={buttonDisabled}>
          Submit
        </Button>
      </Form>
    );
  };
  
  FormRegister.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleIsChequed: PropTypes.func,
    buttonDisabled: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string
  }
  