import React from 'react'
import "./createnote.css"
import "./rcreatenote.css"
import deleteicon from "../src/assets/delete-icon.svg"
export default function Createnote(props) {
  function deletefun() {
    props.deleteArr(props.id)
  }
  return (
    <>
      <div className="main-container">
        <div className='createnote-container'>
          <h1>{props.title}</h1>
          <hr />
          <p> {props.content}</p>
          <img src={deleteicon} alt="" onClick={deletefun} />
        </div>
      </div>

    </>
  )
}
