import React, { useState } from 'react';
import { Card, ToggleButton, ButtonGroup } from 'react-bootstrap';
import '../Styles/Requirements.css';
import BookPage from '../images/bookpage.png';
import AReader from '../images/reader.png';
import BReader from '../images/reader4.png';
import Glasses from '../images/glasses1.png';
import Editor from '../images/editor2.png';
import Graphics from '../images/graphics1.png';
import Query from '../images/letter.png';
import Pen from '../images/pen.png';
import Digital from '../images/digital1.png';


function Requirements() {
    const [requirements, setRequirements] = useState({});
    const [showAllEditors, setShowAllEditors] = useState(false);
    const [copyEditor, setCopyEditor] = useState(false);
    const [pageEditor, setPageEditor] = useState(false);
    const [lineEditor, setLineEditor] = useState(false);
    const [devEditor, setDevEditor] = useState(false);

    const allEditors = () => {
        setShowAllEditors(!showAllEditors);
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        const reqValuesCopy = { ...requirements };
        if (value !== 'on') {
            if (!reqValuesCopy[value]) reqValuesCopy[value] = true;
            else if (reqValuesCopy[value]) reqValuesCopy[value] = !reqValuesCopy[value];
            setRequirements(reqValuesCopy);
        }
        else if (value === 'on') {
            if (!reqValuesCopy[id]) reqValuesCopy[id] = true;
            else if (reqValuesCopy[id]) reqValuesCopy[id] = !reqValuesCopy[id];
            setRequirements(reqValuesCopy);
        }
    };

    return (
        <>
            <div class="list-of-requirements">
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="bookData" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="bookData">
                        <img src={BookPage} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Book Data
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="aReader" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="aReader">
                        <img src={AReader} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                A Reader
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="bReader" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="bReader">
                        <img src={BReader} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                B Reader
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="editors" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={() => handleInputChange, allEditors} />
                    <label for="editors">
                        <img src={Editor} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Editors
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="proofreader" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="proofreader">
                        <img src={Glasses} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Proofreader
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="graphics" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="graphics">
                        <img src={Graphics} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Book Graphics
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="query" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="query">
                        <img src={Query} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Query Letter
                            </span>
                        </div>
                    </label>
                </div><div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="synopsis" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="synopsis">
                        <img src={Pen} alt="" srcset="" />
                        <div>
                            <span class="ng-binding boldening">
                                Synopsis Review
                            </span>
                        </div>
                    </label>
                </div>
                {/* <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="digital" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="digital">
                        <img src={Digital} alt="" srcset="" />
                        <div>
                            <span class="ng-binding boldening">
                                Digital Publishing
                            </span>
                        </div>
                    </label>
                </div> */}
            </div>
            {showAllEditors && <Card border="light" className="editors-requirements-card">
                <Card.Header className="text-center boldening">Which editors do you require?</Card.Header>
                <Card.Body>
                    <ButtonGroup toggle>
                        {!copyEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="copyEditor"
                            id="copyEditor"
                            checked={copyEditor}
                            className="mr-3 editors-check-req boldening"
                            onChange={(e) => { setCopyEditor(true); handleInputChange(e) }}
                        >
                            Copy Editor
                        </ToggleButton>}
                        {copyEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="copyEditor"
                            id="copyEditor"
                            checked={copyEditor}
                            className="mr-3 editors-check-req boldening"
                            onChange={(e) => { setCopyEditor(false); handleInputChange(e) }}
                        >
                            Copy Editor
                        </ToggleButton>}
                        {!pageEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="pageEditor"
                            id='pageEditor'
                            checked={pageEditor}
                            className="mr-3 editors-check-req boldening"
                            onChange={(e) => { setPageEditor(true); handleInputChange(e) }}
                        >
                            Page Editor
                        </ToggleButton>}
                        {pageEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="pageEditor"
                            id='pageEditor'
                            checked={pageEditor}
                            className="mr-3 editors-check-req boldening"
                            onChange={(e) => { setPageEditor(false); handleInputChange(e) }}
                        >
                            Page Editor
                        </ToggleButton>}
                        {!lineEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="lineEditor"
                            id="lineEditor"
                            checked={lineEditor}
                            className="mr-3 editors-check-req boldening"
                            onChange={(e) => { setLineEditor(true); handleInputChange(e) }}
                        >
                            Line Editor
                        </ToggleButton>}
                        {lineEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="lineEditor"
                            id="lineEditor"
                            checked={lineEditor}
                            className="mr-3 editors-check-req boldening"
                            onChange={(e) => { setLineEditor(false); handleInputChange(e) }}
                        >
                            Line Editor
                        </ToggleButton>}
                        {!devEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="devEditor"
                            id="devEditor"
                            checked={devEditor}
                            className="editors-check-req boldening"
                            onChange={(e) => { setDevEditor(true); handleInputChange(e) }}
                        >
                            Developmental Editor
                        </ToggleButton>}
                        {devEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="devEditor"
                            id="devEditor"
                            checked={devEditor}
                            className="editors-check-req boldening"
                            onChange={(e) => { setDevEditor(false); handleInputChange(e) }}
                        >
                            Developmental Editor
                        </ToggleButton>}
                    </ButtonGroup>
                </Card.Body>
            </Card>}
        </>
    )
}
export default Requirements;