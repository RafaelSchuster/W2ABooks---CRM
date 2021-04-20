import React, { useEffect, useState } from 'react';
import '../Styles/Requirements.css';
import axios from 'axios';
import RequirementsMenuItem from './RequirementsMenuItem';


function Requirements() {
    const [requirements, setRequirements] = useState({});
    const [allRequirements, setAllRequirements] = useState([]);

    useEffect(() => {
        axios.post('http://82.81.73.230:5011/ws/GetAllServiceProvidesTypes').then(res => {
            setAllRequirements(res.data.data);
        })
    })

    const handleInputChange = (e) => {
        const id = e;
        const requirementsValuesCopy = { ...requirements };
        if (!requirementsValuesCopy[id]) requirementsValuesCopy[id] = true;
        else if (requirementsValuesCopy[id]) requirementsValuesCopy[id] = !requirementsValuesCopy[id];
        setRequirements(requirementsValuesCopy);
    };

    return (
        <>
            <div class="list-of-requirements">
                {allRequirements && allRequirements.map(requirement => <RequirementsMenuItem requirement={requirement} handleInputChange={handleInputChange} />)}
            </div>
        </>
    )
}
export default Requirements;