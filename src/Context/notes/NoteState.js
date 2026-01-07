import NoteContext from "./NoteContext";
import {useState} from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "695bba494c5349ae89d97e01",
      user: "6954b55a8b311d1798fc0ea8",
      title: "My Notes",
      description: "please walk up",
      tag: "persnol",
      date: "2026-01-05T13:19:05.713Z",
      __v: 0,
    },
    {
      _id: "695bba624c5349ae89d97e031",
      user: "6954b55a8b311d1798fc0ea8",
      title: "My Notes ",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:30.362Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e052",
      user: "6954b55a8b311d1798fc0ea8",
      title: "My Notes ",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e053",
      user: "6954b55a8b311d1798fc0ea8",
      title: "My Notes ",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e054",
      user: "6954b55a8b311d1798fc0ea8",
      title: "My Notes ",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e055",
      user: "6954b55a8b311d1798fc0ea8",
      title: "My Notes ",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial)

  // Add note
const addnote=(title,description,tag)=>{
   console.log("adding a new note")
 const note=   {_id: "695bba634c5349ae89d97e056",
      user: "6954b55a8b311d1798fc0ea8",
      title: title,
      description: description,
      tag: tag,
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    };
  setNotes(notes.concat(note))
}
// delete note 
const deletenote=()=>{

}

// edit add
const editnote=()=>{

}

  return (
    <>
      <NoteContext.Provider value={{notes,addnote,deletenote,editnote}}>
        {props.children}
        </NoteContext.Provider>
    </>
  );
};

export default NoteState;
