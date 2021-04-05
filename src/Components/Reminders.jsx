import React from 'react';
import '../Styles/Reminders.css';
import MyForm from './NoteForm';
import NotesList from './NoteList';

class Reminders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }
    handleNewNotes(newNote) {
        this.setState(state => {
            if (state.notes) {
                localStorage.setItem('notes', JSON.stringify([...state.notes, newNote]));
                return { notes: [...state.notes, newNote] }
            }
            else if (!state.notes) {
                localStorage.setItem('notes', JSON.stringify([newNote]));
                return { notes: [newNote] }
            }
        })
    }
    handleDeletes(date) {
        let confirmation = window.confirm("Are you sure you want to delete this note?");
        if (confirmation) {
            let arr = this.state.notes;
            let arr2 = arr.filter(item => item.date !== date);
            localStorage.setItem('notes', JSON.stringify(arr2));
            this.setState({ notes: arr2 });
        };
    }

    changeNote(title, text, date) {
        let confirmation = window.confirm("Are you sure you want to change this note?");
        let arr2 = this.state.notes;
        if (confirmation) {
            let indexForEdit = arr2.findIndex(el => el.date === date);
            if (title) { arr2[indexForEdit].title = title };
            if (text) { arr2[indexForEdit].text = text; arr2[indexForEdit].date = new Date().toString().split(' ').slice(0, 5).join(' ') };
            localStorage.setItem('notes', JSON.stringify(arr2));
            this.setState({ notes: arr2 });
        };
    }

    componentDidMount() {
        this.setState({ notes: JSON.parse(localStorage.getItem('notes')) });
    }

    render() {
        return (
            <div className="reminders-main-div">
                <MyForm onAddNote={newNote => this.handleNewNotes(newNote)} />
                <NotesList notes={this.state.notes}
                    onNoteDelete={date => this.handleDeletes(date)}
                    noteChange={(title, text, date) => this.changeNote(title, text, date)} />
            </div>
        )
    }
}

export default Reminders;
