import React, { useContext, useEffect, useRef,useState } from "react";
import {useNavigate} from 'react-router-dom'
import NoteContext from "../Context/notes/NoteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

const Notes = (props) => {
  const context = useContext(NoteContext);
   let navigate = useNavigate();
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      
      navigate("/login")
    }
    else{
      getNotes();
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null)
  const refclose = useRef(null)
  const focusRef = useRef(null)

    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:"default"})


  const updateNote = (currentNote) => {
  
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };
  const handleclick=(e)=>{
    console.log("updating the notes...",note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refclose.current.click();
    props.showAlert("updated successfully","success")

         setTimeout(() => {
    focusRef.current.focus();
  }, 300);

      }
      
      const onchange= (e) =>{
setNote({...note ,[e.target.name]:e.target.value})
      }

  return (
    <>
      <Addnote showAlert={props.showAlert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
</button>
      
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"><form>
          <div className="form-group">
            <label htmlFor="etitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              aria-describedby="emailHelp"
              name="etitle" value={note.etitle}
           onChange={onchange} />
         
          </div>
          <div className="form-group">
            <label htmlFor="edescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription" value={note.edescription}
           onChange={onchange} minLength={4} required />
          </div>
          <div className="form-group">
            <label htmlFor="etag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag" value={note.etag}
           onChange={onchange} minLength={5} required />
          </div>
          
         
        </form></div>
            <div className="modal-footer">
              <button ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"  onClick={handleclick} className="btn btn-primary">
                Update notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2 ref={focusRef} tabIndex="-1">Yours Notes</h2>
        <div className="container mx-2">
        {notes.length===0 && 'No Notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
