import { useState } from "react";

const AddNote = (props) => {

    const [noteValue, setNoteValue] = useState('');

    const setValue = (e) =>{
        setNoteValue(e.target.value);
        console.log(noteValue);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.handler(noteValue);
        setNoteValue('');
    }


    return ( 
        <div className="addNote">
            <form>
                <div className="addNoteContainer">
                    <textarea value={noteValue} onChange={setValue} placeholder="Type to add a note..." required></textarea>
                    <button type="submit" onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddNote;