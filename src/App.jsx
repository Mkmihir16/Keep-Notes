import { useEffect, useState } from 'react'
import './App.css'
import Notes from './Notes'
import Createnote from './Createnote'
import Header from './Header';
function App() {
  const [arr,setArr]=useState(JSON.parse(localStorage.getItem("arr"))|| []);

function myfunction(data){
  // alert("Button is clicked")
 setArr((prevdata)=>{
  return( [...prevdata,data]
    
 )}
 )
}
const deleteItem = (id) => {
  setArr((prevArr) => {
    return prevArr.filter((oldArray, index) => {
      return index !== id;
    });
  });
};
useEffect(()=>{
localStorage.setItem("arr",JSON.stringify(arr))
},[arr])
  return (
    <>
    <Header/>
       <Notes showAlert={myfunction}/>
      {arr.map((val,index)=>{
      return <Createnote 
       id={index}
      key={index} 
      title={val.title}
       content={val.content}
       deleteArr={deleteItem}
       />
      })}
       {/* <Createnote/> */}
    </>
  )
}

export default App
