import React, { useEffect, useState } from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import Profile from '../images/profile.png';
import Logo from '../images/logo-white.png';
import MobileMenu from './MobileMenu';
import '../Styles/Main.css'


function Header() {
    const useLocalState = (localItem) => {
        const [localToken, setState] = useState(localStorage.getItem(localItem));
        const setLocalToken = (newItem) => {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }
        return [localToken, setLocalToken];
    }
    const [token, setToken] = useLocalState('token');

    const basicSearching = () => {

    }
    const logout = () =>{
        setToken('');
        window.location.href="/login";
    }

    useEffect(()=>{
    })
    if(window.location.pathname === "/login") {
        return null;
    }
    else{
        return (
            <>
                <div className="outer-div-header">
                    <div className="grid-item grid-item-header">
                        <div className="logo"><a href="/"><img src={Logo} alt="" srcset="" className="main-logo" title="Home" /></a></div>
                    </div>
                    <div className="grid-item grid-item-header2">
                        <Form className="form-hp" onSubmit={e => basicSearching(e)}>
                            <div className="flex-header-form">
                                <FormControl
                                    as="textarea"
                                    className="form-control search-bar  "
                                    id=''
                                    rows={1}
                                    placeholder='Search By Genre...'
                                // onChange={e => handleTypeInput(e)}
                                // onKeyUp={e => handleTypeKeyInput(e)}
                                >
                                </FormControl>
                                <Button className="btn btn-secondary search-btn" type="submit">Search</Button>
                            </div>
                        </Form>
                        <MobileMenu />
                        <div className="flex-header-profile">
                            <div className="flex-hello">
                                <span className="hello">Hello Rafael</span>
                                <button type="button" className="btn btn-danger btn-logout" onClick={logout}>Logout</button>
                            </div>
                            <img src={Profile} alt="No Img" srcset="" className="thumbnail" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Header;