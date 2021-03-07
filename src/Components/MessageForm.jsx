import React, { useContext, useEffect } from 'react';
import { Alert, Button, Container, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MsgContext } from '../Context/Context';
// import { createMsg} from '../lib/api';
import '../Styles/MessageForm.css';
import { createMsg } from '../Api/MessageApi';

let msgText;
let newMsg;
let userIdentifier = '';

function MessageForm() {
    const { msg, setMsg } = useContext(MsgContext);
    const { length, setLength } = useContext(MsgContext);
    const { userId } = useContext(MsgContext);
    // const { currentUser } = useAuth();

    const msgInput = (event) => {
        msgText = event.target.value;
        setMsg(msgText);
        if (msgText) setLength(msgText.length);
    }

    const onSubmiting = (event) => {
        if (userId) { userIdentifier = userId }
        // else userIdentifier = currentUser;
        event.preventDefault();
        newMsg = {
            content: msgText,
            userName: userIdentifier,
            date: new Date().toISOString(),
            id: Math.random()
        }
        // createMsg(newMsg);
        setMsg('');
    }

    return (
        <MsgContext.Consumer>
            {() => {
                return <Container>
                    <Form
                        onSubmit={event => onSubmiting(event)}
                        className="form-group">
                        <FormControl
                            as="textarea"
                            className="form-control msgBox"
                            id=''
                            rows={10}
                            value={msg}
                            onChange={event => msgInput(event)}
                            placeholder='Message this author...'>
                        </FormControl>
                        <Button
                            disabled={length > 140}
                            variant="primary"
                            className='msgBtn'
                            type='submit'
                        >Message
                        </Button>
                    </Form>
                    <Alert
                        className="maxChar"
                        show={length > 140}
                        variant={'danger'}
                    >
                        The message can't contain more then 140 chars.
                </Alert>
                </Container>
            }}
        </MsgContext.Consumer>
    )
}
export default MessageForm;