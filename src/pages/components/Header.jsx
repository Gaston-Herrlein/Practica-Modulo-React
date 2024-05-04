import { useState, useEffect } from "react";
import storage from "../../utils/storage";
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export const Header = () => {
    const [accesToken, setAccesToken] = useState(null);

    const handleAccesToken = (token) => {
        setAccesToken(token);
    }

    useEffect (() => {
        const token = storage.get("accessToken")
        if (token) {
            handleAccesToken(token)
        }
    }, [])

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container className="justify-content-between">
                        <Navbar.Brand className="" href="#home">NodePop</Navbar.Brand>
                        <Nav className="">
                            <AuthButtons accesToken={accesToken}/>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}

const AuthButtons = ({accesToken}) => {
    return (
        <>
        {accesToken === null ? (<>
            <Stack direction="horizontal" gap={3}>
                <Button variant="primary">Login</Button>
                <Button variant="primary">Sign up</Button>
            </Stack>
            </>) : 
            <Button variant="primary">Close</Button>
        }
        </>
    )
}

AuthButtons.propTypes = {
    accesToken: PropTypes.string
  }