import React from 'react';
import '../Styles/GenreProfile.css';

function GenreMenuItem(props) {
    const { genre } = props;
    const onHandleInputChange = (e) => {
        props.handleInputChange(e.target.id)
    }
    return (
        <div class="ganer-block ng-scope" ng-repeat="itm in userDataEdit.all_preferred_genres">
            <input type="checkbox"
                id={genre.genre_id}
                ng-model="itm.selected_genre"
                class="ng-pristine ng-untouched ng-valid ng-not-empty"
                onClick={onHandleInputChange} />
            <label for={genre.genre_id}>
                <img src={`http://w2abooks.com/Images/Ganers/${genre.genre_description.replace(/\//g, "or")}.png`} alt="" srcset="" />
                <div>
                    <span class="ng-binding boldening">
                        {genre.genre_description}
                    </span>
                </div>
            </label>
        </div>
    )
}

export default GenreMenuItem;
