import React, { useEffect, useState } from 'react';
import '../Styles/Requirements.css';
import RequirementsMenuItem from './RequirementsMenuItem';
import { connectToServer } from '../HelperFunctions/ConnectToServer';



function Requirements() {
    const [requirements, setRequirements] = useState({});
    const [allRequirements, setAllRequirements] = useState([]);

    const onSuccess = (res) => {
        setAllRequirements(res.data.data);
    }

    const onError = (error) => console.log(error);


    useEffect(async () => {
        await connectToServer(`GetAllServiceProvidesTypes`, null, onSuccess, onError)
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