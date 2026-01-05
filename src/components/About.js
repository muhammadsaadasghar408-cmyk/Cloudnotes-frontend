import React,{useContext, useEffect} from 'react'
import NoteContext from '../Context/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext)
useEffect(() => {
a.update()
 // eslint-disable-next-line
}, [])

  return (
    <div>
      <h1>my name muhammad {a.state.Name} my roll no {a.state.rollno}
      </h1>
    </div>
  )
}

export default About
