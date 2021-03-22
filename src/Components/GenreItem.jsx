import React from 'react';

function GenreItem(props) {
    return (
        <div className="text-center blueing mb-2">
            {props.genre}
        </div>
    )
}

export default GenreItem;