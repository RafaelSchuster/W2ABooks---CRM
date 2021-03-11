import React, { useState } from 'react';
import { Card, ToggleButton, ButtonGroup } from 'react-bootstrap';
import '../Styles/StatusProgress.css';

function StatusProgress() {
    const [bookData, setBookData] = useState('selected');
    const [aReader, setAReader] = useState('selected');
    const [bReader, setBReader] = useState('selected');
    const [editors, setEditors] = useState('selected');
    const [proofReader, setProofReader] = useState('selected');
    const [bookGraphics, setBookGraphics] = useState('selected');
    const [queryLetter, setQueryLetter] = useState('selected');
    const [synopsisReview, setSynopsisReview] = useState('selected');
    const [digitalPublishing, setDigitalPublishing] = useState('');
    const [agent, setAgent] = useState('');
    const [marketing, setMarketing] = useState('');
    const [showAllEditors, setShowAllEditors] = useState(false);
    const [checked, setChecked] = useState(false);

    const allEditors = () => {
        setShowAllEditors(!showAllEditors);
    }

    return (
        <>
            <div className="progress-div">
                <div className="row">
                    <div className="col-md-3">
                        <div className="grid-container1">
                            <div id="div-procces-list" className="" >
                                <div className="hex-row ">
                                    <div className={`hex main-box process-fin`} ng-class="{'process-fin':selectedBook!=null}">
                                        <div className="left">
                                        </div>
                                        <div className="middle upload-a-book">
                                            <input type="radio" name="procces-item" id="cb_level_upload-a-book" value="-1" />
                                            <label for="cb_level_upload-a-book" className="hex-text" title="Book Data" provider-type="-1">Book Data</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                    <div className={`hex main-box ${aReader} even`} ng-class="{'process-fin':checkOneProccessStatus(2)}">
                                        <div className="left"></div>
                                        <div className="middle a-reader">
                                            <input type="radio" name="procces-item" id="cb_level_2" value="2" />
                                            <label for="cb_level_2" class="hex-text" title="A Reader" provider-type="2">A Reader</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                                <div className="hex-row">
                                    <div className={`hex main-box ${bReader}`} ng-class="{'process-fin':checkOneProccessStatus(4)}">
                                        <div className="left"></div>
                                        <div className="middle b-reader">
                                            <input type="radio" name="procces-item" id="cb_level_4" value="4" />
                                            <label for="cb_level_4" className="hex-text" title="B Reader" provider-type="4">B Reader</label>
                                        </div>
                                        <div class="right"></div>
                                    </div>
                                    <div className={`hex main-box ${editors} even`}>
                                        <div className="left"></div>
                                        <div className="middle editors">
                                            <input type="radio" name="procces-item" id="cb_level_9" value="9" onClick={allEditors} />
                                            <label for="cb_level_9" className="hex-text" title="Editors" provider-type="9">Editors</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                                <div className="hex-row">
                                    <div className={`hex main-box ${proofReader}`}>
                                        <div className="left"></div>
                                        <div className="middle proofreader">
                                            <input type="radio" name="procces-item" id="cb_level_3" value="3" />
                                            <label for="cb_level_3" class="hex-text" title="Proofreader" provider-type="3">Proofreader</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                    <div className={`hex main-box ${bookGraphics} even`}>
                                        <div className="left"></div>
                                        <div className="middle book-graphics">
                                            <input type="radio" name="procces-item" id="cb_level_20" value="20" />
                                            <label for="cb_level_20" class="hex-text" title="Book Graphics" provider-type="20">Book Graphics</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                                <div className="hex-row">
                                    <div className={`hex main-box ${queryLetter}`}>
                                        <div className="left"></div>
                                        <div className="middle query-letter">
                                            <input type="radio" name="procces-item" id="cb_level_25" value="25" />
                                            <label for="cb_level_25" class="hex-text" title="Query Letter" provider-type="20">Query Letter</label>
                                        </div>
                                        <div class="right"></div>
                                    </div>
                                    <div className={`hex main-box ${synopsisReview} even`}>
                                        <div className="left"></div>
                                        <div className="middle synopsis-review">
                                            <input type="radio" name="procces-item" id="cb_level_110" value="110" />
                                            <label for="cb_level_110" class="hex-text" title="Synopsis Review" provider-type="110">Synopsis Review</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                                <div className="hex-row ">
                                    <div className={`hex main-box ${digitalPublishing}`}>
                                        <div className="left"></div>
                                        <div className="middle digital-publishing">
                                            <input type="radio" name="procces-item" id="cb_level_115" value="115" />
                                            <label for="cb_level_115" className="hex-text" title="Digital Publishing" provider-type="115">Digital Publishing</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                    <div className={`hex main-box ${agent} even`}>
                                        <div className="left"></div>
                                        <div className="middle agent">
                                            <input type="radio" name="procces-item" id="cb_level_99" value="99" />
                                            <label for="cb_level_99" className="hex-text" title="Agent" provider-type="99">Agent</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                                <div className="hex-row">
                                    <div className={`hex main-box ${marketing}`}>
                                        <div className="left"></div>
                                        <div className="middle marketing">
                                            <input type="radio" name="procces-item" id="cb_level_120" value="120" />
                                            <label for="cb_level_120" className="hex-text" title="Marketing" provider-type="120">Marketing</label>
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showAllEditors && <Card border="light" className="editors-card">
                <Card.Header className="text-center">Editors</Card.Header>
                <Card.Body>
                    <ButtonGroup toggle >
                        <ToggleButton
                            type="checkbox"
                            variant="success"
                            checked={checked}
                            value="1"
                            className="mr-3"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            Copy Editor
                        </ToggleButton>
                        <ToggleButton
                            type="checkbox"
                            variant="success"
                            checked={checked}
                            value="1"
                            className="mr-3"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            Page Editor
                        </ToggleButton>
                        <ToggleButton
                            type="checkbox"
                            variant="success"
                            checked={checked}
                            value="1"
                            className="mr-3"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            Line Editor
                        </ToggleButton>
                        <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            checked={checked}
                            value="1"
                            className=""
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            Developmental Editor
                        </ToggleButton>
                    </ButtonGroup>
                </Card.Body>
            </Card>}
        </>
    )
}
export default StatusProgress;

