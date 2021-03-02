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
    const [genres, setGenres] = useState({});
    const [showAllEditors, setShowAllEditors] = useState(false);
    const [copyEditor, setCopyEditor] = useState(false);
    const [pageEditor, setPageEditor] = useState(false);
    const [lineEditor, setLineEditor] = useState(false);
    const [devEditor, setDevEditor] = useState(false);
    const [checked, setChecked] = useState(false);

    const allEditors = () => {
        setShowAllEditors(!showAllEditors);
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        const genreValuesCopy = { ...genres };
        if (value !== 'on' ) {
            if (!genreValuesCopy[value]) genreValuesCopy[value] = true;
            else if (genreValuesCopy[value]) genreValuesCopy[value] = !genreValuesCopy[value];
            setGenres(genreValuesCopy);
        }
        else if(value === 'on') {
            if (!genreValuesCopy[id]) genreValuesCopy[id] = true;
            else if (genreValuesCopy[id]) genreValuesCopy[id] = !genreValuesCopy[id];
            setGenres(genreValuesCopy);
        }
    };

    return (
        <>
            <h3 className="requirements-header" >What are your requirements for promoting a book?</h3>
            <div class="list-of-requirements">
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="bookData" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="bookData">
                        <img src={BookPage} alt="" />
                        <div>
                            <span class="ng-binding">
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
                            <span class="ng-binding">
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
                            <span class="ng-binding">
                                B Reader
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="editors" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange, allEditors} />
                    <label for="editors">
                        <img src={Editor} alt="" />
                        <div>
                            <span class="ng-binding">
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
                            <span class="ng-binding">
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
                            <span class="ng-binding">
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
                            <span class="ng-binding">
                                Query Letter
                            </span>
                        </div>
                    </label>
                </div><div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="synopsis" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="synopsis">
                        <img src={Pen} alt="" srcset="" />
                        <div>
                            <span class="ng-binding">
                                Synopsis Review
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="digital" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="digital">
                        <img src={Digital} alt="" srcset="" />
                        <div>
                            <span class="ng-binding">
                                Digital Publishing
                            </span>
                        </div>
                    </label>
                </div>
            </div>
            {showAllEditors && <Card border="light" className="editors-requirements-card">
                <Card.Header className="text-center">Which Editors You Require?</Card.Header>
                <Card.Body>
                    <ButtonGroup toggle>
                        {!copyEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="copyEditor"
                            id="copyEditor"
                            checked={copyEditor}
                            className="mr-3 editors-check-req"
                            onChange={(e) => {setCopyEditor(true);handleInputChange(e)}}
                        >
                            Copy Editor
                        </ToggleButton>}
                        {copyEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="copyEditor"
                            id="copyEditor"
                            checked={copyEditor}
                            className="mr-3 editors-check-req"
                            onChange={(e) => {setCopyEditor(false); handleInputChange(e)}}
                        >
                            Copy Editor
                        </ToggleButton>}
                        {!pageEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="pageEditor"
                            id='pageEditor'
                            checked={pageEditor}
                            className="mr-3 editors-check-req"
                            onChange={(e) => {setPageEditor(true); handleInputChange(e)}}
                        >
                            Page Editor
                        </ToggleButton>}
                        {pageEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="pageEditor"
                            id='pageEditor'
                            checked={pageEditor}
                            className="mr-3 editors-check-req"
                            onChange={(e) => {setPageEditor(false); handleInputChange(e)}}
                        >
                            Page Editor
                        </ToggleButton>}
                        {!lineEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="lineEditor"
                            id="lineEditor"
                            checked={lineEditor}
                            className="mr-3 editors-check-req"
                            onChange={(e) => {setLineEditor(true);handleInputChange(e)}}
                        >
                            Line Editor
                        </ToggleButton>}
                        {lineEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="lineEditor"
                            id="lineEditor"
                            checked={lineEditor}
                            className="mr-3 editors-check-req"
                            onChange={(e) => {setLineEditor(false);handleInputChange(e)}}
                        >
                            Line Editor
                        </ToggleButton>}
                        {!devEditor && <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="devEditor"
                            id="devEditor"
                            checked={devEditor}
                            className="editors-check-req"
                            onChange={(e) =>{ setDevEditor(true); handleInputChange(e)}}
                        >
                            Developmental Editor
                        </ToggleButton>}
                        {devEditor && <ToggleButton
                            type="checkbox"
                            variant="primary"
                            value="devEditor"
                            id="devEditor"
                            checked={devEditor}
                            className="editors-check-req"
                            onChange={(e) =>{ setDevEditor(false); handleInputChange(e)}}
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