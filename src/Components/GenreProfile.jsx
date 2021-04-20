import React, { useEffect, useState } from 'react';
import '../Styles/GenreProfile.css';
import axios from 'axios';
import GenreMenuItem from './GenreMenuItem';


function GenreProfile() {
    const [genres, setGenres] = useState({});
    const [allGenres, setAllGenres] = useState([]);

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
    };

    return (
        <>
            <div class="list-of-ganres">
            {allGenres && allGenres.map(genre => <GenreMenuItem genre={genre} handleInputChange={handleInputChange}/>)}
            </div>
        </>
    )
}

export default GenreProfile;