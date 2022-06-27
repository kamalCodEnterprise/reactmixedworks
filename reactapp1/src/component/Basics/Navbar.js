import React from 'react';


const Navbar = ({filtercategory,menulist}) => {
    const navbr = menulist.map(
        (curEle)=>{
          return  (
                  <button onClick={()=>filtercategory(curEle)}>{curEle}</button>
                  );
                  
        }    
     );
    
    
  return (
    <>
      <nav>
        {navbr}
      </nav>
   </>
  )
}

export default Navbar