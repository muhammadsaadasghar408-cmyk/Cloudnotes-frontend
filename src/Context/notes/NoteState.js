import NoteContext from "./NoteContext";
import {useState} from "react";
const NoteState = (props) => {

  const host="http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)

  // Add note
const getNotes= async ()=>{
  // api call 
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
    },

  });
  const json= await response.json();
  setNotes(json)
}
const addNote= async (title,description,tag)=>{
  // api call 
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
    },
    body: JSON.stringify({title ,description,tag}),
  });
  const note=await response.json()
  setNotes(notes.concat(note))

}
// delete note 
const deleteNote= async (id)=>{

const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
    },
   
  });
  const json= response.json()
 
 const newnotes=notes.filter((note)=>{return note._id!==id})
setNotes(newnotes)
}

// edit add
const editNote= async (id,title,description,tag)=>{
  // api call 
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
    body: JSON.stringify({title,description,tag}),
  });
  const json= await response.json()
  
  
  //logic to edit in client 
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id===id) {
      notes[index].title=title;
      notes[index].description=description;
      notes[index].tag=tag;
      break;
    }
  }
  setNotes(notes)
}
  


  return (
    <>
      <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
        </NoteContext.Provider>
    </>
  );
};

export default NoteState;
