import React, { useState } from 'react';
import '../Styles/Contacts.css';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Styles/ContactCard.css';
import Page from '../images/bio.png'
import Info from '../images/info.png'
import Trash from '../images/trash.png'
import People from '../images/people.png';

function TableItems(props) {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);

    return (
        <tr>
            <td className="text-center">{props.id}</td>
            <td className="text-center">{props.firstName}</td>
            <td className="text-center">{props.lastName}</td>
            <td className="text-center">{props.telephone}</td>
            <td className="text-center">{props.email}</td>
            <td className="text-center">{props.company}</td>
            <td className="text-center">{props.jobTitle}</td>
            <td className="text-center">
                <input type="image" variant="primary" id="about" className="" src={Info} title="About"  onClick={() => setModalIsOpen1(true)}></input>
                <Modal className="my-modal"
                    isOpen={modalIsOpen1}
                    onRequestClose={() => setModalIsOpen1(false)}
                >
                    <h1 className="text-center">About This Contact</h1>
                    {props.personalBio && <Card.Body>
                        <Card.Text><img srcSet={Page}></img><span className="text-center ml-2 contact-bio">{props.personalBio}</span>  </Card.Text>
                    </Card.Body>}
                </Modal>
                <input type="image" variant="primary" src={People} className="ml-2" id="delete" title="Work history" ></input>
                <input type="image" variant="primary" src={Trash} className="ml-2" id="delete" title="Delete contact"></input>
            </td>
        </tr>
    )
}

export default TableItems;
