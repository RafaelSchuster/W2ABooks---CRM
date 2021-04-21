import React, { useEffect, useState } from 'react';
import '../Styles/GenreProfile.css';
import GenreMenuItem from './GenreMenuItem';
import { connectToServer } from '../HelperFunctions/ConnectToServer';



function GenreProfile() {
    const [genres, setGenres] = useState({});
    const [allGenres, setAllGenres] = useState([]);
    const { REACT_APP_CONNECT_URL } = process.env;

    const onSuccess = (res) => {
        setAllGenres(res.data.data);
    }

    const onError = (error) => console.log(error);


    useEffect(async () => {
        await connectToServer(`GetGenres`, null, onSuccess, onError)
    })

    const handleInputChange = (e) => {
        const id = e;
        const genreValuesCopy = { ...genres };
        if (!genreValuesCopy[id]) genreValuesCopy[id] = true;
        else if (genreValuesCopy[id]) genreValuesCopy[id] = !genreValuesCopy[id];
        setGenres(genreValuesCopy);
    };

    return (
        <>
            <div class="list-of-ganres">
                {allGenres && allGenres.map(genre => <GenreMenuItem genre={genre} handleInputChange={handleInputChange} />)}
            </div>
        </>
    )
}

export default GenreProfile;