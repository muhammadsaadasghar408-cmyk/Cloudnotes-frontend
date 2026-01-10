import React,{useContext} from "react";
import NoteContext from "../Context/notes/NoteContext";

function Noteitem(props) {
const context = useContext(NoteContext)
  const {deleteNote}=context;

  const { note,updateNote } = props;
  return (

    
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">
              {note.title}
               <i className="far fa-trash-alt mx-2 " onClick={()=>{deleteNote(note._id)}}></i>
              <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
            </h5>
          </div>
          <p className="card-text"> {note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
