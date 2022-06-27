import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/material';
import React from 'react'

const Cardcomponent = ({apiData}) => {


  return (
    <>
    {

apiData.map((currEle) => {
 
  const {id,name,price,category,description}= currEle;
            return (
            <>
            <div >
            <div className='card-container'>
        <div className='card'>
           <div className='card-body'>
           
            <span className='numbers'>{id}</span>
            <span className='search-bar'>{name}</span>
            <span className='search-bar'>{price}</span>
               
            </div>
    </div>
        </div>
        </div>
           </> );
        })
    }
    
    
    
    
    </>
  )
}

export default Cardcomponent;