import React, { useContext, useState } from 'react';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ToggleMain.css'
import BookItemGridView from './BookItemGridView';
import BooksSection from './BooksSection';
import { MainContext } from '../Context/Context';
import BooksList from './BooksList';
import Minimize from '../images/minimize.png';
import Maximize from '../images/maximize.png';
import Plus from '../images/plus_sign.png';

function ToggleMain() {
    const { workingBooks, recommendedBooks, starredBooks, deletedBooks } = useContext(MainContext);
    const [workingMaximize, setWorkingMaximize] = useState(true);
    const [recommendedMaximize, setRecommendedMaximize] = useState(false);
    const [starredMaximize, setStarredMaximize] = useState(false);
    const [deletedMaximize, setDeletedMaximize] = useState(false);

    const atSetWorkingMaximize = () => {
        setWorkingMaximize(!workingMaximize);
        setRecommendedMaximize(false);
        setStarredMaximize(false);
        setDeletedMaximize(false);
    }

    const atSetRecommendedMaximize = () => {
        setWorkingMaximize(false);
        setRecommendedMaximize(!recommendedMaximize);
        setStarredMaximize(false);
        setDeletedMaximize(false);
    }

    const atSetStarredMaximize = () => {
        setWorkingMaximize(false);
        setRecommendedMaximize(false);
        setStarredMaximize(!starredMaximize);
        setDeletedMaximize(false);
    }

    const atSetDeletedMaximize = () => {
        setWorkingMaximize(false);
        setRecommendedMaximize(false);
        setStarredMaximize(false);
        setDeletedMaximize(!deletedMaximize);
    }

    return (<>
    <div className="grid-item grid-item-main">
        <Accordion className="grid-main-toggle" defaultActiveKey="0" >
            <Card className="grid-toggle-card" >
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="grid-toggle-btn" title="Change View" onClick={() => atSetWorkingMaximize()}>
                        <button className="toggle-books-title" title="Change View">What I am Working on</button>
                        {workingMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close" />}
                        {!workingMaximize && <input type="image" src={Plus} className="maximize-icon" title="Open" />}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={workingBooks} starred={false} recommended={false} deleted={false} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="grid-toggle-card">
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="grid-toggle-btn" title="Change View" onClick={() => atSetRecommendedMaximize()}>
                        <button className="toggle-books-title" title="Change View">Recommended For You!</button>
                        {recommendedMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close" />}
                        {!recommendedMaximize && <input type="image" src={Plus} className="maximize-icon" title="Open" />}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={recommendedBooks} starred={true} recommended={true} deleted={false} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="grid-toggle-card">
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="grid-toggle-btn" title="Change View" onClick={() => atSetStarredMaximize()}>
                        <button className="toggle-books-title" title="Change View">Starred!</button>
                        {starredMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close" />}
                        {!starredMaximize && <input type="image" src={Plus} className="maximize-icon" title="Open" />}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={starredBooks} starred={false} recommended={false} deleted={false} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="grid-toggle-card">
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="grid-toggle-btn" title="Change View" onClick={() => atSetDeletedMaximize()}>
                        <button className="toggle-books-title" title="Change View">Deleted</button>
                        {deletedMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close" />}
                        {!deletedMaximize && <input type="image" src={Plus} className="maximize-icon" title="Open" />}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={deletedBooks} starred={false} recommended={false} deleted={true} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>
    </>
    );
}
export default ToggleMain;