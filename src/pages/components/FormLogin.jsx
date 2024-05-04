import { Button, Form } from "react-bootstrap";

import PropTypes from 'prop-types';

export const FormLogin = ({
    handleSubmit,
    handleChange,
    handleIsChequed,
    buttonDisabled,
    email,
    password,
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
  
  FormLogin.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleIsChequed: PropTypes.func,
    buttonDisabled: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string
  }
  