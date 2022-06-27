
import { render } from "react-dom";

import './App.css';
import Resturnt from './component/Basics/Resturnt';
import Usereducer from './component/Basics/Usereducer';
import Testing from './component/Basics/Testing';
import { useEffect, useState } from 'react';
import Layout from './component/Basics/Layout';
import {  Link } from "react-router-dom";

const title = "react title";
const getdata=()=>{
 const list = localStorage.getItem("mytodolist");
 if(list){
      return JSON.parse(list);
 }else{
   return [];
 }

}

function App() {
  const [inputData,setData]= useState("");
  const [item,setItems]= useState(getdata());
  const [isEdit,setIsedit]= useState("");
  const [toggle,setToggle] = useState(false);

 
  // local storage
  useEffect(()=>{
    localStorage.setItem('mytodolist',JSON.stringify(item));
  },[item]);

  // add function
  const additem=()=>{
    if(!inputData){
      alert("please inter item name");
    }else if(inputData && toggle){

      setItems(
    item.map((cureditele)=>{
       if(cureditele.id===isEdit){
              return {...cureditele,name:inputData};
       }
       return cureditele;
        

    })
    

      );
      setData("");
      setIsedit();
      setToggle(false);
    }
    else{
      const newinputid ={
        id:new Date().getTime().toString(),
        name:inputData
      };
      setItems([...item,newinputid]);
      setData("");
    }
  }
  // end add function

  // delete function

  const delet=(index)=>{

    const deletitem = item.filter((curdle)=>{
    return curdle.id!==index;

    });
    setItems(deletitem);
  }
  // end delete function

  // remove all

   const removall = () =>{
     setItems([]);

   }

  // 

  // edit function

 const editfunc = (index) =>{
const editdata = item.find((editel)=>{
  return editel.id === index;
});
setData(editdata.name);
     setIsedit(index);
     setToggle(true);
 }

  // 
  return (
    <div className="App">
      
      <Testing/>
      <h1>{title}</h1>  

  <Resturnt/>
<Usereducer/>


<br/>======================================
<div>
  
  <input type="text" placeholder='inter value' value={inputData} onChange={(event)=>{setData(event.target.value)}}/>

  {toggle ? <span onClick={additem}>edit</span>:<span onClick={additem}>add</span>}
  
</div>


{item.map((curEle)=>{

  return <div key={curEle.id}>

  <h3>{curEle.name}</h3>
  
  <span onClick={()=>editfunc(curEle.id)}>edit </span>
  <span onClick={()=>delet(curEle.id)}> Delete</span>
</div>

})}
<button onClick={removall}>Clear all</button><br/>
=======================

    </div>
  );
}

export default App;
