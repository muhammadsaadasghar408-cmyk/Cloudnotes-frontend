import React,{useContext,useState} from 'react'
import NoteContext from "../Context/notes/NoteContext";

function Addnote() {
     const context = useContext(NoteContext)
      const {addNote}=context;

      const [note, setNote] = useState({title:"",description:"",tag:"default"})

      const handleclick=(e)=>{
        e.preventDefault();
         addNote(note.title, note.description,note.tag);
      }
      const onchange=(e)=>{
setNote({...note ,[e.target.name]:e.target.value})
      }
  return (
      <div className="container my-3">
        <h2>Add Notes</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
           onChange={onchange} />
         
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
           onChange={onchange} />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary my-3" onClick={handleclick}>
            Submit
          </button>
        </form>
      </div>
  )
}

export default Addnote