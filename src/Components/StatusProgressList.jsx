import React from 'react';
import '../Styles/StatusProgress.css'
import StatusProgressItem from './StatusProgressItem';

function StatusProgressList() {
    const statusStages = ['Book Data', 'A Reader', 'B Reader', 'Editors',
        'Proofreader', 'Book Graphics', 'Query Letter', 'Synopsis Review', 'Digital Publishing', 'Agent', 'Marketing']
    return (
        <>
        {/* <div class ="row">
            <div class="col-md-3">
                    <div class="grid-container1">
                        <div id="div-procces-list" class="" style="float: left; width: 400px; ">
                            <div class="hex-row ">
                                <div class="hex main-box process-fin" ng-class="{'process-fin':selectedBook!=null}">
                                    <div class="left">
                                    </div>
                                    <div class="middle upload-a-book">
                                        <input type="radio" name="procces-item" id="cb_level_upload-a-book" value="-1"/>
                                        <label for="cb_level_upload-a-book" class="hex-text" title="Book Data" provider-type="-1">Book Data</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                                <div class="hex main-box even" ng-class="{'process-fin':checkOneProccessStatus(2)}">
                                    <div class="left"></div>
                                    <div class="middle a-reader">
                                        <input type="radio" name="procces-item" id="cb_level_2" value="2"/>
                                        <label for="cb_level_2" class="hex-text" title="A Reader" provider-type="2">A Reader</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
        
                            </div>
                            <div class="hex-row">
                                <div class="hex main-box selected" ng-class="{'process-fin':checkOneProccessStatus(4)}">
                                    <div class="left"></div>
                                    <div class="middle b-reader">
                                        <input type="radio" name="procces-item" id="cb_level_4" value="4"/>
                                        <label for="cb_level_4" class="hex-text" title="B Reader" provider-type="4">B Reader</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                                <div class="hex main-box even">
                                    <div class="left"></div>
                                    <div class="middle editors">
                                        <input type="radio" name="procces-item" id="cb_level_9" value="9"/>
                                        <label for="cb_level_9" class="hex-text" title="Editors" provider-type="9">Editors</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                            </div>
                            <div class="hex-row">
                                <div class="hex main-box">
                                    <div class="left"></div>
                                    <div class="middle proofreader">
                                        <input type="radio" name="procces-item" id="cb_level_3" value="3"/>
                                        <label for="cb_level_3" class="hex-text" title="Proofreader" provider-type="3">Proofreader</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                                <div class="hex main-box even">
                                    <div class="left"></div>
                                    <div class="middle book-graphics">
                                        <input type="radio" name="procces-item" id="cb_level_20" value="20"/>
                                        <label for="cb_level_20" class="hex-text" title="Book Graphics" provider-type="20">Book Graphics</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                            </div>
                            <div class="hex-row">
                                <div class="hex main-box">
                                    <div class="left"></div>
                                    <div class="middle query-letter">
                                        <input type="radio" name="procces-item" id="cb_level_25" value="25"/>
                                        <label for="cb_level_25" class="hex-text" title="Query Letter" provider-type="20">Query Letter</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                                <div class="hex main-box even">
                                    <div class="left"></div>
                                    <div class="middle synopsis-review">
                                        <input type="radio" name="procces-item" id="cb_level_110" value="110"/>
                                        <label for="cb_level_110" class="hex-text" title="Synopsis Review" provider-type="110">Synopsis Review</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                            </div>
                            <div class="hex-row ">
                                <div class="hex main-box">
                                    <div class="left"></div>
                                    <div class="middle digital-publishing">
                                        <input type="radio" name="procces-item" id="cb_level_115" value="115"/>
                                        <label for="cb_level_115" class="hex-text" title="Digital Publishing" provider-type="115">Digital Publishing</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                                <div class="hex main-box even">
                                    <div class="left"></div>
                                    <div class="middle agent">
                                        <input type="radio" name="procces-item" id="cb_level_99" value="99"/>
                                        <label for="cb_level_99" class="hex-text" title="Agent" provider-type="99">Agent</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                            </div>
                            <div class="hex-row">
                                <div class="hex main-box">
                                    <div class="left"></div>
                                    <div class="middle marketing">
                                        <input type="radio" name="procces-item" id="cb_level_120" value="120"/>
                                        <label for="cb_level_120" class="hex-text" title="Marketing" provider-type="120">Marketing</label>
                                    </div>
                                    <div class="right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            {/* {statusStages.map((stage, index) =>
                <StatusProgressItem
                    key={Math.random()}
                    index={index}
                    stage={stage} />
            )
            } */} 
        </>
    )
}
export default StatusProgressList;