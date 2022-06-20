import './Notes.css';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import AddNote from './AddNote';
import Note from './Note';


const Notes = () => {
    const [notes, setNotes] = useState([]);
    //const [newNote, setNewNote] = useState('');
    const [search, setSearch] = useState('');

    const createNewNote = (data) => {
        setNotes(notes => [data,...notes] );
        console.log(notes);
    }

    const handleDelete = (data) =>{
        notes.splice(data, 1);
        setNotes(notes => [...notes]);
    }

    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return ( 
        <div className="notes">
            <div className="notesContainer">
                <h1>Notes</h1>
                <div className="searchDiv">
                    <div className="searchIcon"><BsSearch /></div>
                    <input type="search" placeholder='Type to search...' onChange={handleSearch}></input>
                </div>
                <div className="notesGrid">
                    {notes.length !== 0 && 
                    notes.filter(note => note.startsWith(search)).map((n, index) =>{
                        return <Note key={index} note={n} index={index} handler={handleDelete}/>
                    })
                    }
                   
                    <AddNote handler={createNewNote}/>
                </div>
            </div>
        </div>
     );
}
 
export default Notes;

