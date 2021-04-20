import React, { useEffect, useState } from 'react';
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
import GenreProfile from './GenreProfile';
import Requirements from './Requirements';
import FileManager from './FileManager';
import Reminders from './Reminders';
import MessageComponent from './MessageComponent';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import Jobs from './Jobs';
import MobileMenu from './MobileMenu';
import ToggleGrid from './ToggleMain';
import AddBookForm from './AddBookForm';
import ToggleMain from './ToggleMain';
import MainDashboard from './MainDashboard';
import SignLogin from './SignLogin';
import { ProtectedRoute } from './ProtectedRoute';


function Main() {
    return (
        <Router>
            <Switch>
                <div className="grid-container">
                    <Header />
                    <div className="grid-item grid-item-sidebar">
                        <Toggle />
                    </div>
                    <ProtectedRoute path='/' exact component={ToggleMain} />
                    <ProtectedRoute path='/main_dashboard' component={MainDashboard} />
                    <ProtectedRoute path='/account_profile' component={AccountProfile} />
                    <ProtectedRoute path='/genre_profile' component={GenreProfile} />
                    <ProtectedRoute path='/requirements' component={Requirements} />
                    <ProtectedRoute path='/file_manager' component={FileManager} />
                    <ProtectedRoute path='/Reminders' component={Reminders} />
                    <ProtectedRoute path='/messaging' component={MessageComponent} />
                    <ProtectedRoute path='/add_contact' component={ContactForm} />
                    <ProtectedRoute path='/contacts' component={Contacts} />
                    <ProtectedRoute path='/job_history' component={Jobs} />
                    <Route path='/login'>
                        <SignLogin />
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}
export default Main;