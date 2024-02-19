import React, { useEffect, useState } from 'react'
import "./notes.css"
import "./rnote.css"
import plusicon from "../src/assets/plus-icon.svg"
export default function Notes(props) {
    const[data,setData]=useState(
       JSON.parse(localStorage.getItem("data")) || {
            title:"",
            content:""
    })
    function myfun(e){
        const value=e.target.value;
        const name=e.target.name;
        setData({
            ...data,
            [name]:value
        })
    }
    function showItem(){
        props.showAlert(data);
        setData({
            title:"",
            content:""
        })
    }
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data))
    },[data])
  return (
   <>
   <div className="Notes-main-container">
   <div className="notes-container">
        <form action="">
            <input
             type="text"
              name="title"
             onChange={myfun}
              value={data.title} 
             placeholder='Title'/>
            <textarea name="content"
              onChange={myfun}
             id=""
             cols="" 
            value={data.content}
             placeholder='Enter Note Here..' 
            rows=""
            ></textarea>
        </form>
        <img src={plusicon} alt="" onClick={showItem} />
    </div>
    </div>
    </>
  )
}
