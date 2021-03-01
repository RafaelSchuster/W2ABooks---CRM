import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './Toggle';
import BooksSection from './BooksSection';
import Header from './Header';
import AccountProfile from './AccountProfile';
import JobProfile from './JobProfile';

function Main() {
    return (
        <Router>
            <div className="grid-container">
                <Header />
                <div className="grid-item grid-item-sidebar">
                    <Toggle />
                </div>
                <Switch>
                    <Route path='/' exact>
                        <div className="grid-item grid-item-main">
                            <BooksSection />
                        </div>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/account_profile'>
                        <AccountProfile />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/job_profile'>
                        <JobProfile />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default Main;