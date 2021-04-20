import React, { useEffect } from 'react';
import '../Styles/RequirementsMenuItem.css';

function RequirementsMenuItem(props) {
    const onHandleInputChange = (e) => {
        console.log(e.target);
        props.handleInputChange(e.target.id)
    }
    return (
        <div class="service-provider-block ng-scope" ng-repeat="itm in userDataEdit.all_service_providers">
            <input type="checkbox" id={props.requirement.service_provider_id} ng-model="itm.selected_service_provider" 
            class="ng-untouched ng-valid ng-not-empty ng-dirty ng-valid-parse"
            onClick={onHandleInputChange}/>
            <label for={props.requirement.service_provider_id}>
                <div>
                    <span class="ng-binding">
                        {props.requirement.description}
                    </span>
                </div>
            </label>
        </div>
    )
}

export default RequirementsMenuItem;

