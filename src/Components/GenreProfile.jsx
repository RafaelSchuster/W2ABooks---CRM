import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import GenreMenuItem from './GenreMenuItem';


function GenreProfile() {
    const [genres, setGenres] = useState({});
    const [allGenres, setAllGenres] = useState([])

    useEffect(() => {
        axios.post('http://82.81.73.230:5011/ws/GetGenres').then(res => { 
        setAllGenres(res.data.data)})
    })

    const handleInputChange = (e) => {
        const  id  = e;
        const genreValuesCopy = { ...genres };
        if (!genreValuesCopy[id]) genreValuesCopy[id] = true;
        else if (genreValuesCopy[id]) genreValuesCopy[id] = !genreValuesCopy[id];
        setGenres(genreValuesCopy);
        // console.log(genres);
    };

    return (
        <>
            <div class="list-of-ganres">
            {allGenres && allGenres.map(genre => <GenreMenuItem genre={genre} handleInputChange={handleInputChange}/>)}
                {/* <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="classic" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="classic">
                        <img src={Classic} alt="" srcset="" />
                        <div>
                            <span class="ng-binding boldening">
                                Classic
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="comics" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="comics">
                        <img src={Comics} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Comics / Graphic novel
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="crime" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="crime">
                        <img src={Crime} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Crime / detective
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fable" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="fable">
                        <img src={Fable} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Fable
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fairy" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="fairy">
                        <img src={Fairy} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Fairy tale
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fan" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="fan">
                        <img src={Fan} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Fan fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="fantasy" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="fantasy">
                        <img src={Fantasy} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Fantasy
                            </span>
                        </div>
                    </label>
                </div><div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="folklore" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="folklore">
                        <img src={Folklore} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Folklore
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="historical" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="historical">
                        <img src={Historical} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Historical fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="horror" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="horror">
                        <img src={Horror} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Horror
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="humor" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="humor">
                        <img src={Humor} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Humor
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="legend" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="legend">
                        <img src={Legend} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Legend
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="magic" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="magic">
                        <img src={Magic} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Magical realism
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="meta" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="meta">
                        <img src={Meta} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Meta fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="mystery" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="mystery">
                        <img src={Mystery} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Mystery
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="mythology" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="mythology">
                        <img src={Mythology} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Mythology
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="mythopoeia" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="mythopoeia">
                        <img src={Mythopoeia} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Mythopoeia
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="picture" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="picture">
                        <img src={Picture} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Picture book
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="real" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="real">
                        <img src={Real} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Realistic fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="science" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="science">
                        <img src={Science} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Science fiction
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="short" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="short">
                        <img src={Short} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Short story
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="suspense" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="suspense">
                        <img src={Suspense} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Suspense / Thriller
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="swash" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="swash">
                        <img src={Swash} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Swashbuckler
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="tall" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="tall">
                        <img src={Tall} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Tall tale
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="western" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-not-empty" onClick={handleInputChange} />
                    <label for="western">
                        <img src={Western} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Western
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="biography" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="biography">
                        <img src={Biography} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Biography
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="essay" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="essay">
                        <img src={Essay} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Essay
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="guide" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="guide">
                        <img src={Guide} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Owner's manual / User's guide
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="journalism" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="journalism">
                        <img src={Journalism} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Journalism
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="lab" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="lab">
                        <img src={Lab} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Lab Report
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="memoir" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="memoir">
                        <img src={Memoir} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Memoir
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="narrative" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="narrative">
                        <img src={Narrative} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Narrative nonfiction / personal narrative
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="reference" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="reference">
                        <img src={Reference} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Reference book
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="self" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="self">
                        <img src={Self} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Self-help book
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="speech" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="speech">
                        <img src={Speech} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Speech
                            </span>
                        </div>
                    </label>
                </div>
                <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
                    <input type="checkbox" id="textbook" ng-model="itm.selected_genre" class="ng-pristine ng-untouched ng-valid ng-empty" onClick={handleInputChange} />
                    <label for="textbook">
                        <img src={Textbook} alt="" />
                        <div>
                            <span class="ng-binding boldening">
                                Textbook
                            </span>
                        </div>
                    </label>
                </div> */}
            </div>
        </>
    )
}

export default GenreProfile;