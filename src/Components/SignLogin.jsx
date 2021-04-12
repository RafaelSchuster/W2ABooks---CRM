import React, { useContext, useState } from 'react';
import { Card, Form, Alert, Button, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import { MainContext } from '../Context/Context';
import '../Styles/SignLogin.css'
import SignUp from './SignUp';
import Login from './Login';

function SignLogin() {
    const [login, setLogin] = useState(true)

    return (
        <>
            <div className='logged-out'>
                {login && <Login setLogin={setLogin} />}
                {!login && <SignUp setLogin={setLogin}/>}
            </div>
        </>
    )
}
export default SignLogin;