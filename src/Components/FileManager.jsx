import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import '../Styles/FileManager.css'
import Upload from '../images/upload.png'

function FileManager() {
    return (
        <>
            <h1 className="file-manager-header">File Manager</h1>
            <Container className="file-manager-container">
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.File type="file" id="file_upload" hidden></Form.File>
                                <Form.Label for="file_upload" className="upload-icon" title="Upload your file"><img src={Upload} alt="" srcset="" /></Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                </Row>

            </Container>
        </>
    )

}
export default FileManager;