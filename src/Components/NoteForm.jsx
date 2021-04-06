import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
        }
    }
    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }
    onNoteChange = (event) => {
        this.setState({ text: event.target.value });
    }
    onSubmiting = (event) => {
        event.preventDefault();
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            date: new Date().toString().split(' ').slice(0, 5).join(' ')
        };
        this.setState({ title: '', text: '' });
        this.props.onAddNote(newNote);
    }
    render() {
        return (
            <Container>
                {/* <h3 className="reminders-header boldening">Reminders Note Book</h3> */}
                <Form className='mt-5' onSubmit={event => this.onSubmiting(event)}>
                    <Form.Group>
                        <h1 className='text-white'>Notes</h1>
                        <Form.Control
                            className='m-3 note-title-form'
                            placeholder="Write Your Note's Title Here..."
                            as="textarea" rows={1}
                            name='title'
                            id='title'
                            value={this.state.title}
                            onChange={event => this.onTitleChange(event)} />
                        <Form.Control
                            className='m-3 note-text-form'
                            placeholder='Write Your Note Here...'
                            as="textarea" rows={5}
                            name='note'
                            id='note'
                            value={this.state.text}
                            onChange={event => this.onNoteChange(event)}
                            required />
                        <Button
                            className='btn add-note'
                            type='submit'
                        >Create a Note</Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
export default MyForm;