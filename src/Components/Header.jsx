import React from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import Profile from '../images/profile.png';
import Logo from '../images/logo-white.png';
import MobileMenu from './MobileMenu';
import '../Styles/Main.css'


function Header() {
    const basicSearching = () => {

    }
    return (
        <>
            <div className="grid-item grid-item-header">
                <div className="logo"><a href="/"><img src={Logo} alt="" srcset="" className="main-logo" /></a></div>
            </div>
            <div className="grid-item grid-item-header2">
                    <Form className="form-hp" onSubmit={e => basicSearching(e)}>
                        <div className="flex-header-form">
                            <FormControl
                                as="textarea"
                                className="form-control search-bar  "
                                id=''
                                rows={1}
                                placeholder='Search Books By Genre...'
                            // onChange={e => handleTypeInput(e)}
                            // onKeyUp={e => handleTypeKeyInput(e)}
                            >
                            </FormControl>
                            <Button className="btn btn-secondary search-btn" type="submit">Search</Button>
                        </div>
                    </Form>
                <MobileMenu/>
                <div className="flex-header-profile">
                    <div className="flex-hello">
                        <span className="hello">Hello Rafael</span>
                        <button type="button" className="btn btn-danger btn-logout">Logout</button>
                    </div>
                    <img src={Profile} alt="No Img" srcset="" className="thumbnail" />
                </div>
            </div>
        </>
    )
}
export default Header;