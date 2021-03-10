import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../Styles/Jobs.css';

class JobsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            projectName: '',
            payment: '',
            startDate: '',
            endDate: '',
            status: '',
            description: '',
        }
    }
    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }
    onProjectNameChange = (event) => {
        this.setState({ projectName: event.target.value });
    }
    onPaymentChange = (event) => {
        this.setState({ payment: event.target.value });
    }

    onStartDateChange = (event) => {
        this.setState({ startDate: event.target.value });
    }
    onEndDateChange = (event) => {
        this.setState({ endDate: event.target.value });
    }
    onStatusChange = (event) => {
        this.setState({ status: event.target.value });
    }
    onJobDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    onSubmiting = (event) => {
        event.preventDefault();
        const newJob = {
            title: this.state.title,
            projectName: this.state.projectName,
            payment: this.state.payment,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: this.state.status,
            description: this.state.description,
            date: new Date().toString().split(' ').slice(0, 5).join(' ')
        };
        !newJob.projectName ? newJob.projectName = this.props.defaultBookName : newJob.projectName = this.state.projectName
        this.setState({ title: '', projectName: '', payment: '', startDate: '', endDate: '', status: '', description: '' });
        this.props.onAddJob(newJob);
    }
    render() {
        return (
            <Container>
                <Form className='mt-5' onSubmit={event => this.onSubmiting(event)}>
                    <Form.Group>
                        <Row>
                            <Col>
                                <h3 className="text-center boldening">Add Job To List</h3>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control
                                    className='m-3'
                                    placeholder='Job Title'
                                    as="textarea" rows={1}
                                    name='title'
                                    id='title'
                                    value={this.state.title}
                                    onChange={event => this.onTitleChange(event)} />
                            </Col>
                            <Col>
                                {this.props.defaultBookName && <Form.Control
                                    className='m-3'
                                    placeholder='Project Name'
                                    as="textarea" rows={1}
                                    name='projectName'
                                    id='projectName'
                                    value={this.props.defaultBookName}
                                    onChange={event => this.onProjectNameChange(event)} />}
                                {!this.props.defaultBookName && <Form.Control
                                    className='m-3'
                                    placeholder='Project Name'
                                    as="textarea" rows={1}
                                    name='projectName'
                                    id='projectName'
                                    value={this.state.projectName}
                                    onChange={event => this.onProjectNameChange(event)} />}
                            </Col>
                            <Col>
                                <Form.Control
                                    className='m-3'
                                    placeholder='Payment'
                                    as="textarea" rows={1}
                                    name='payment'
                                    id='payment'
                                    value={this.state.payment}
                                    onChange={event => this.onPaymentChange(event)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <Form.Group>
                                    <label className="start-date-label">Start Date of Service:</label>
                                    <input type="date"
                                        onChange={event => this.onStartDateChange(event)}
                                        name="startDate"
                                        id="startDate"
                                        value={this.state.startDate}
                                        className="start-date-box" />
                                </Form.Group>
                            </Col>
                            <Col xs="4">
                                <Form.Group className="end-date-group">
                                    <label >End Date of Service:</label>
                                    <input type="date"
                                        onChange={event => this.onEndDateChange(event)}
                                        name="endDate"
                                        id="endDate"
                                        value={this.state.endDate}
                                        className="end-date-box" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1" className="job-status-dropd">
                                    <Form.Control as="select" name="status" value={this.state.status} onChange={event => this.onStatusChange(event)}>
                                        <option value="">-- Job Status --</option>
                                        <option value='finished'>Finished</option>
                                        <option value='pending'>Pending</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Control
                            className='m-3'
                            placeholder='Job Description'
                            as="textarea" rows={2}
                            name='description'
                            id='description'
                            value={this.state.description}
                            onChange={event => this.onJobDescriptionChange(event)}
                            required />
                        <Button
                            className='btn btn-primary btn-block m-3'
                            type='submit'
                        >Add Job</Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
export default JobsForm;