// import React from 'react';
// import Modal from 'react-modal';
// import { Card, Button, Tabs, Tab, ProgressBar } from 'react-bootstrap';

// function ModalStatus() {
//     return (
//         <Modal
//             className="status-modal"
//             overlayClassName="overlay-modal-status"
//             isOpen={modalStatusIsOpen}
//             onRequestClose={() => setModalStatusIsOpen(false)}
//         >
//             <Card.Header as="h1" className="text-center" >Status</Card.Header>
//             <Card.Body>
//                 <Card.Text className="status-date-grid"><span className="boldening">Date Presenting: </span>{props.datePresenting}</Card.Text>
//                 <Card.Text className="response-date-grid"><span className="boldening">Response Date: </span>{props.dateResponse}</Card.Text>
//                 <Card.Text className="response-status-grid"><span className="boldening">Response Status: </span>{props.responseStatus}</Card.Text>
//                 <Card.Text className="meeting-date-grid"><span className="boldening">Meeting Date: </span>{props.meetingDate}</Card.Text>
//                 <Card.Text className=""><span className="boldening">Proofreader's Grade: </span>{props.proofReaderGrade}</Card.Text>
//                 {props.stagesDone && <Card.Text className=""><span className="boldening">Stages Done: </span>{props.stagesDone}</Card.Text>}
//                 {props.processStatus && <Card.Text className=""><span className="boldening">Process Status: </span>{props.processStatus}</Card.Text>}
//                 <ProgressBar variant="warning" now={props.progress} label={`${props.progress}%`} className="progressBar-grid"></ProgressBar>
//                 {props.progress === '0' && <ProgressBar variant="warning" now={props.progress} className="progressBar-grid"><span className="zero-percent" >0%</span></ProgressBar>}
//             </Card.Body>
//         </Modal>
//     )
// }

// export default ModalStatus;