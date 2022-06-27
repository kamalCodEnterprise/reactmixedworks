import React,{useReducer} from 'react'

const Usereducer = () => {
    const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state= state + 1;
    case 'decrement':
     if(state > 0){
        return state= state - 1;
     }else{
         alert("fdf");
        return state=0; 
        
     };
  }
  
}

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    Count: {state}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    
    
    
    </>
  )
}

export default Usereducer