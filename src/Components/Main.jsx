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
import FileManager from './FileManager';
import Reminders from './Reminders';
import MessageComponent from './MessageComponent';
import Contacts from './Contacts';
import ContactAdd from './ContactAdd';
import JobForm from './JobsForm';
import Jobs from './Jobs';

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
                            <BooksSection bookmarking={false} />
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
                <Switch>
                    <Route path='/bookmarks'>
                        <div className="grid-item grid-item-main">
                            <BooksSection bookmarking={true} />
                        </div>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/file_manager'>
                        <FileManager />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/Reminders'>
                        <div className="reminders-main-div">
                            <Reminders />
                        </div>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/messaging'>
                        <MessageComponent />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/add_contact'>
                        <ContactAdd />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/contacts'>
                        <Contacts />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/job_history'>
                        <Jobs />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default Main;