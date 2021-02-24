import React from 'react';

function GenreItem(props){
    return(
        <div className="text-center blueing">
            {props.genre}
        </div>
    )
}

export default GenreItem;