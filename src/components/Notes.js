import React,{useContext} from 'react'
import NoteContext from "../Context/notes/NoteContext";
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {
    const context = useContext(NoteContext)
  const {notes,addnote}=context;
  return (
    <>
    <Addnote/>
 <div className="row my-3">
        <h2>Yours Notes</h2>
        {notes.map((note)=>{
          return <Noteitem key={note._id} note={note}/>;
        }

        )}
      </div>
      </>
  )
}

export default Notes