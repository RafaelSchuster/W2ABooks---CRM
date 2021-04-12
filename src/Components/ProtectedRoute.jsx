import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [permited, setPermited] = useState(localStorage.getItem('token'));

    return (
        <Route
            {...rest}
            render={
               (props) => {
                    if (permited){
                        return <Component {...props} />
                    } 
                    else {
                        return (
                            <Redirect to={{
                                pathname: '/login',
                                state: {
                                    from: props.location
                                }
                            }} />
                        )
                    }
                }
            }
        />
    );
};