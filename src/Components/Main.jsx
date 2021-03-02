import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './Toggle';
import BooksSection from './BooksSection';
import Header from './Header';
import AccountProfile from './AccountProfile';
import GenreProfile from './GenreProfile';
import Requirements from './Requirements';

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
                    <Route path='/genre_profile'>
                        <GenreProfile />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/requirements'>
                        <Requirements />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default Main;