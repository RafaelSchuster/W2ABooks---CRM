import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Profile from '../images/profile.png';


function Header() {
    const basicSearching = () => {

    }
    return (
        <>
            <div className="grid-item grid-item-header">
                <div className="logo"><a href="82.81.73.230:101">Company Logo</a></div>
            </div>
            <div className="grid-item grid-item-header2">
                <Form className="form-hp" onSubmit={e => basicSearching(e)}>
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
                </Form>
                <span className="hello">Hello Rafael</span>
                <img src={Profile} alt="No Img" srcset="" className="thumbnail" />
                <button type="button" className="btn btn-danger btn-logout">Logout</button>
            </div>
        </>
    )
}
export default Header;