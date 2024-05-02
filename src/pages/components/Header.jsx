import { useState, useEffect } from "react";
import storage from "../../utils/storage";
import PropTypes from 'prop-types';

export const Header = () => {
    const {accesToken, setAccesToken} = useState(null);

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
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">NodePop</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <AuthButtons accesToken={accesToken}/>
                </div>
            </nav>    
        </header>
    )
}

const AuthButtons = ({accesToken}) => {
    return (
        <>
        {accesToken !== null ? (<>
            <button className="btn btn-outline-success" type="submit">Login</button>
            <button className="btn btn-outline-success" type="submit">Sign Up</button> 
            </>) : 
            <button type="button" className="btn-close" aria-label="Close"></button>}
        </>
    )
}

AuthButtons.propTypes = {
    accesToken: PropTypes.string | null
  }