import React, { useEffect, useState } from 'react';
import Menucarddata from './Menucarddata.js';
import Cardcomponent from './Cardcomponent';
import Navbar from './Navbar.js';
import Container from '@mui/material/Container';


const Resturnt = () => {
  const uniqlistCat = [...new Set(Menucarddata.map((curEle)=>{
 
    return curEle.category;

})),
"All",]; 
console.log(uniqlistCat);
    const [apiData,setApiData]= useState(Menucarddata);
    const [menulist,setMenulist]= useState(uniqlistCat);
    const [num, setNum]=useState(0);

useEffect(()=>{
  document.title=`chats ${num}`;
})
    const filtercategory=(category)=>{


      if(category === "All"){
        setApiData(Menucarddata);
    return;

      }
      
      const updatelist = Menucarddata.filter((currEle)=>{

         return currEle.category === category;

      });
      setApiData(updatelist);

    }

    
  return (
    <Container>
    
    <h4>Resturnt1</h4>
    <p>{num}</p>
        <button onClick={()=>setNum(num +1)}>increment</button>
        <button onClick={()=>num > 0 ? setNum(num -1):setNum(0)}>decrement</button>
       <p></p>
    <Navbar filtercategory={filtercategory}  menulist={menulist}/>
    <Cardcomponent apiData={apiData}/>
   
       
    
    
    </Container>
  )
}

export default Resturnt;