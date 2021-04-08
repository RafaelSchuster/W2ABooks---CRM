import React, { useContext, useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { MainContext } from '../Context/Context';

const GenresDropdown = () => {
    const [bookGenres, setBookGenres] = useState([]);

    const animatedComponents = makeAnimated();

    const genresChosen = [];

    const updateGenres = (genresSelected) => {
        setBookGenres(genresSelected);
    }

    const genres = [
        { value: 'Classic', label: 'Classic' },
        { value: 'Comics / Graphic novel', label: ' Comics / Graphic novel' },
        { value: 'Crime / detective', label: 'Crime / detective' },
        { value: 'Fable', label: 'Fable' },
        { value: 'Fairy tale', label: 'Fairy tale' },
        { value: 'Fan fiction', label: 'Fan fiction' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Folklore', label: 'Folklore' },
        { value: 'Historical fiction', label: 'Historical fiction' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Humor', label: 'Humor' },
        { value: 'Legend', label: 'Legend' },
        { value: 'Magical realism', label: 'Magical realism' },
        { value: 'Meta fiction', label: 'Meta fiction' },
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Mythology', label: 'Mythology' },
        { value: 'Mythopoeia', label: 'Mythopoeia' },
        { value: 'Picture book', label: 'Picture book' },
        { value: 'Realistic fiction', label: 'Realistic fiction' },
        { value: 'Science fiction', label: 'Science fiction' },
        { value: 'Short story', label: 'Short story' },
        { value: 'Suspense / Thriller', label: 'Suspense / Thriller' },
        { value: 'Swashbuckler', label: 'Swashbuckler' },
        { value: 'Tall tale', label: 'Tall tale' },
        { value: 'Western', label: 'Western' },
        { value: 'Biography', label: 'Biography' },
        { value: 'Essay', label: 'Essay' },
        { value: "Owner's manual / User's guide", label: "Owner's manual / User's guide" },
        { value: 'Journalism', label: 'Journalism' },
        { value: 'Lab Report', label: 'Lab Report' },
        { value: 'Memoir', label: 'Memoir' },
        { value: 'Narrative nonfiction / personal narrative', label: 'Narrative nonfiction / personal narrative' },
        { value: 'Reference book', label: 'Reference book' },
        { value: 'Self-help book', label: 'Self-help book' },
        { value: 'Speech', label: 'Speech' },
        { value: 'Textbook', label: 'Textbook' },

    ]
    return (
        <Select
            isMulti
            name="genres"
            options={genres}
            components={animatedComponents}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={genresSelected => updateGenres(genresSelected)}
            placeholder="Genres:"
        />
    )
};

export default GenresDropdown;