import React, { useState } from 'react';
import '../Styles/GenreProfile.css';
import Classic from '../images/Classic.png';
import Comics from '../images/Comics Or Graphic novel.png';
import Crime from '../images/Crime Or detective.png';
import Fable from '../images/Fable.png';
import Fairy from '../images/Fairy tale.png';
import Fan from '../images/Fan fiction.png';
import Fantasy from '../images/Fantasy.png';
import Folklore from '../images/Folklore.png';
import Historical from '../images/Historical fiction.png';
import Horror from '../images/Horror.png';
import Humor from '../images/Humor.png';
import Legend from '../images/Legend.png';
import Magic from '../images/Magical realism.png';
import Meta from '../images/Meta fiction.png';
import Mystery from '../images/Mystery.png';
import Mythology from '../images/Mythology.png';
import Mythopoeia from '../images/Mythopoeia.png';
import Picture from '../images/Picture book.png';
import Real from '../images/Realistic fiction.png';
import Science from '../images/Science fiction.png';
import Short from '../images/Short story.png';
import Suspense from '../images/Suspense Or Thriller.png';
import Swash from '../images/Swashbuckler.png';
import Tall from '../images/Tall tale.png';
import Western from '../images/Western.png';
import Biography from '../images/Biography.png';
import Essay from '../images/Essay.png';
import Guide from "../images/Owner's manual Or User's guide.png";
import Journalism from '../images/Journalism.png';
import Lab from '../images/Lab Report.png';
import Memoir from '../images/Memoir.png';
import Narrative from '../images/Narrative nonfiction Or personal narrative.png';
import Reference from '../images/Reference book.png';
import Self from '../images/Self-help book.png';
import Speech from '../images/Speech.png';
import Textbook from '../images/Textbook.png';


function GenreProfile() {
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
            <h3 className="genres-header" >Which genres you like working with?</h3>
            <div class="list-of-ganres">
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="classic" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="classic">
                        <img src={Classic} alt="" srcset="" />
                        <div>
                            <span class="ng-binding">
                                Classic
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="comics" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="comics">
                        <img src={Comics} />
                        <div>
                            <span class="ng-binding">
                                Comics / Graphic novel
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="crime" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="crime">
                        <img src={Crime} />
                        <div>
                            <span class="ng-binding">
                                Crime / detective
                </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fable" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="fable">
                        <img src={Fable} />
                        <div>
                            <span class="ng-binding">
                                Fable
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fairy" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="fairy">
                        <img src={Fairy} />
                        <div>
                            <span class="ng-binding">
                                Fairy tale
                </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fan" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="fan">
                        <img src={Fan} />
                        <div>
                            <span class="ng-binding">
                                Fan fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fantasy" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="fantasy">
                        <img src={Fantasy} />
                        <div>
                            <span class="ng-binding">
                                Fantasy
                            </span>
                        </div>
                    </label>
                </div><div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="folklore" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="folklore">
                        <img src={Folklore} />
                        <div>
                            <span class="ng-binding">
                                Folklore
                </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="historical" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="historical">
                        <img src={Historical} />
                        <div>
                            <span class="ng-binding">
                                Historical fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="horror" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="horror">
                        <img src={Horror} />
                        <div>
                            <span class="ng-binding">
                                Horror
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="humor" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="humor">
                        <img src={Humor} />
                        <div>
                            <span class="ng-binding">
                                Humor
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="legend" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="legend">
                        <img src={Legend} />
                        <div>
                            <span class="ng-binding">
                                Legend
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="magic" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="magic">
                        <img src={Magic} />
                        <div>
                            <span class="ng-binding">
                                Magical realism
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="meta" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="meta">
                        <img src={Meta} />
                        <div>
                            <span class="ng-binding">
                                Meta fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="mystery" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="mystery">
                        <img src={Mystery} />
                        <div>
                            <span class="ng-binding">
                                Mystery
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="mythology" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="mythology">
                        <img src={Mythology} />
                        <div>
                            <span class="ng-binding">
                                Mythology
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="mythopoeia" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="mythopoeia">
                        <img src={Mythopoeia} />
                        <div>
                            <span class="ng-binding">
                                Mythopoeia
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="picture" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="picture">
                        <img src={Picture} />
                        <div>
                            <span class="ng-binding">
                                Picture book
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="real" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="real">
                        <img src={Real} />
                        <div>
                            <span class="ng-binding">
                                Realistic fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="science" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="science">
                        <img src={Science} />
                        <div>
                            <span class="ng-binding">
                                Science fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="short" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="short">
                        <img src={Short} />
                        <div>
                            <span class="ng-binding">
                                Short story
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="suspense" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="suspense">
                        <img src={Suspense} />
                        <div>
                            <span class="ng-binding">
                                Suspense / Thriller
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="swash" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="swash">
                        <img src={Swash} />
                        <div>
                            <span class="ng-binding">
                                Swashbuckler
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="tall" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="tall">
                        <img src={Tall} />
                        <div>
                            <span class="ng-binding">
                                Tall tale
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="western" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="western">
                        <img src={Western} />
                        <div>
                            <span class="ng-binding">
                                Western
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="biography" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="biography">
                        <img src={Biography} />
                        <div>
                            <span class="ng-binding">
                                Biography
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="essay" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="essay">
                        <img src={Essay} />
                        <div>
                            <span class="ng-binding">
                                Essay
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="guide" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="guide">
                        <img src={Guide} />
                        <div>
                            <span class="ng-binding">
                                Owner's manual / User's guide
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="journalism" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="journalism">
                        <img src={Journalism} />
                        <div>
                            <span class="ng-binding">
                                Journalism
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="lab" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="lab">
                        <img src={Lab} />
                        <div>
                            <span class="ng-binding">
                                Lab Report
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="memoir" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="memoir">
                        <img src={Memoir} />
                        <div>
                            <span class="ng-binding">
                                Memoir
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="narrative" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="narrative">
                        <img src={Narrative} />
                        <div>
                            <span class="ng-binding">
                                Narrative nonfiction / personal narrative
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="reference" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="reference">
                        <img src={Reference} />
                        <div>
                            <span class="ng-binding">
                                Reference book
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="self" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="self">
                        <img src={Self} />
                        <div>
                            <span class="ng-binding">
                                Self-help book
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="speech" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="speech">
                        <img src={Speech} />
                        <div>
                            <span class="ng-binding">
                                Speech
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="textbook" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="textbook">
                        <img src={Textbook} />
                        <div>
                            <span class="ng-binding">
                                Textbook
                            </span>
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default GenreProfile;