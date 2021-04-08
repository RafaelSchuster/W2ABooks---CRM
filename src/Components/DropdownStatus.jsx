import React, { useContext, useState } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { MainContext } from '../Context/Context';

const StatusDropdown = () => {
    const [bookStatus, setBookStatus] = useState([]);

    const animatedComponents = makeAnimated();

    const updateStatus = (statusSelected) => {
        setBookStatus(statusSelected);
    }

    const status = [
        { value: 'Book Data', label: 'Book Data' },
        { value: 'A Reader', label: 'A Reader' },
        { value: 'B Reader', label: 'B Reader' },
        { value: 'Copy Editor', label: 'Copy Editor' },
        { value: 'Page Editor', label: 'Page Editor' },
        { value: 'Line Editor', label: 'Line Editor' },
        { value: 'Developmental Editor', label: 'Developmental Editor' },
        { value: 'Proofreader', label: 'Proofreader' },
        { value: 'Book Graphics', label: 'Book Graphics' },
        { value: 'Query Letter', label: 'Query Letter' },
        { value: 'Synopsis Review', label: 'Synopsis Review' }]

    return (
        <Select
            isMulti
            name="status"
            options={status}
            components={animatedComponents}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={statusSelected => updateStatus(statusSelected)}
            placeholder="Stages Completed:"
        />
    )
};

export default StatusDropdown;