import { useState, useEffect } from "react";
import storage from "../../utils/storage";
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useAuth } from "../auth/context";

export const Header = () => {
    const {isLogged, onLogin} = useAuth()

    useEffect (() => {
        const token = storage.get("accessToken")
        if (token) {
            onLogin()
        }
    }, [])

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container className="justify-content-between">
                        <Navbar.Brand className="" href="#home">NodePop</Navbar.Brand>
                        <Nav className="">
                            <AuthButtons isLogged={isLogged}/>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}

const AuthButtons = ({isLogged}) => {
    return (
        <>
        {isLogged === null ? (<>
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
    isLogged: PropTypes.bool
  }