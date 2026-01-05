
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=> {

    const s1={
   "Name":"saad",
   "rollno":"23-cit-11"
    }
    const [state, setState]=useState(s1);
const update=()=>{
  setTimeout(() => {
    setState({
      "Name":"sohail",
   "rollno":"23-cit-12"
   })
}, 1000);
}

  return (
    <>
    <NoteContext.Provider  value={{state, update}}>
{props.children}
    </NoteContext.Provider>
    </>
  )
}

export default NoteState
