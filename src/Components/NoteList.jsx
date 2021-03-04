import React from 'react';
import NoteItem from './NoteItem';

class NotesList extends React.Component{
    deleting(date){
        this.props.onNoteDelete(date);
    }
    noteChanging(title, text, date){
        this.props.noteChange(title, text, date);
    }
    render(){
        return <ul className="grid">
            {this.props.notes.map(note =>
                <NoteItem
                key ={note.date}
                title={note.title}
                text = {note.text}
                date ={note.date}
                onDeleting = {date => this.deleting(date)}
                onEditing= {(title,text,date) => this.noteChanging(title, text, date)}/>
            )}
        </ul>  
        }
    } 

export default NotesList;
