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

const AccordionContext = React.createContext({});

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'black' : 'white' }}
            onClick={decoratedOnClick}
            className="grid-toggle-btn"
        >
            {children}
        </button>
    );
}

function ToggleGrid() {
    const { workingBooks, recommendedBooks, starredBooks, deletedBooks } = useContext(MainContext);
    const [workingMaximize, setWorkingMaximize] = useState(true);
    const [recommendedMaximize, setRecommendedMaximize] = useState(false);
    const [starredMaximize, setStarredMaximize] = useState(false);
    const [deletedMaximize, setDeletedMaximize] = useState(false);

    return (<>
        <Accordion className="grid-main-toggle" defaultActiveKey="0" >
            <Card className="grid-toggle-card" >
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="grid-toggle-btn" title="Change View" onClick={()=>setWorkingMaximize(!workingMaximize)}>
                        <button className="toggle-books-title" title="Change View">What I am Working on</button> 
                        {workingMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close"/>}
                        {!workingMaximize && <input type="image" src={Maximize} className="maximize-icon" title="Open"/>}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={workingBooks} starred={false} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="grid-toggle-card">
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="grid-toggle-btn" title="Change View" onClick={()=>setRecommendedMaximize(!recommendedMaximize)}>
                    <button className="toggle-books-title" title="Change View">Recommended For You!</button>
                        {recommendedMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close"/>}
                        {!recommendedMaximize && <input type="image" src={Maximize} className="maximize-icon" title="Open"/>}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={recommendedBooks} starred={true} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="grid-toggle-card">
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="grid-toggle-btn" title="Change View" onClick={()=>setStarredMaximize(!starredMaximize)}>
                    <button className="toggle-books-title" title="Change View">Starred!</button>
                        {starredMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close"/>}
                        {!starredMaximize && <input type="image" src={Maximize} className="maximize-icon" title="Open"/>}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={starredBooks} starred={false} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="grid-toggle-card">
                <Card.Header className="">
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="grid-toggle-btn"title="Change View" onClick={()=>setDeletedMaximize(!deletedMaximize)}>
                    <button className="toggle-books-title" title="Change View">Deleted</button>
                        {deletedMaximize && <input type="image" src={Minimize} className="minimize-icon" title="Close"/>}
                        {!deletedMaximize &&<input type="image" src={Maximize} className="maximize-icon" title="Open"/>}
                        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="grid-toggle-content">
                        <BooksList books={deletedBooks} starred={false} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </>
    );
}
export default ToggleGrid;