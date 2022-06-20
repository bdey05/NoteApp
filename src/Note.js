const Note = (props) => {
    return ( 
        <div className="note">
            <p>{props.note}</p>
            <button onClick={ () => props.handler(props.index)}>Delete</button>
        </div>
     );
}
 
export default Note;