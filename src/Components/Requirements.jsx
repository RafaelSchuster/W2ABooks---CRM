import React, { useState } from 'react';
import '../Styles/Requirements.css';
import Classic from '../images/Classic.png';
import BookPage from '../images/bookpage.png'
import AReader from '../images/reader1.png'
import BReader from '../images/reader2.png'
import Glasses from '../images/glasses.png'
import Editor from '../images/editor.png'
import Graphics from '../images/graphics.png'
import Query from '../images/query.png'
import Pen from '../images/pen.jpg'
import Digital from '../images/digital.png'


function Requirements() {
    const [genres, setGenres] = useState({});

    const handleInputChange = (e) => {
        const { id } = e.target;
        const genreValuesCopy = { ...genres };
        genreValuesCopy[id] = true;
        setGenres(genreValuesCopy);
        console.log(genres);
    };
    return (
        <>
            <h3 className="requirements-header" >What are your requirements for promoting a book?</h3>
            <div class="list-of-ganres">
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="bookData" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="bookData">
                        <img src={BookPage} />
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
                        <img src={AReader} />
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
                        <img src={BReader} />
                        <div>
                            <span class="ng-binding">
                                B Reader
                </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="editors" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="editors">
                        <img src={Editor} />
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
                        <img src={Glasses} />
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
                        <img src={Graphics} />
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
                        <img src={Query} />
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
        </>
    )
}
export default Requirements;