import isWindows from 'is-windows';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Dummy = () => {
    let history=useHistory();
 
  function sub(){
   history.push("/user/compare/chart");
 // window.location.pathname='/user/compare/chart'
}
  const company1=()=>console.log('1click');
  const company2=()=>console.log('12click');
  const exchn1=()=>console.log('1clhhhick');
  const exch2=()=>console.log('12chhlick');
  return (
  
   
   
      <div>
     
      <input type="number" name="company1" onChange={company1}  placeholder="First Company Code" />

      <br />
   
      <input type="number" name="company2" onChange={company2} placeholder="Second Company Code" />

      <br />
    
      <input type="text" name="exchange1" onChange={exchn1}  placeholder="Exchange-1 " />

      <br />
  

      <input type="text" name="exchange2" onChange={exch2} placeholder="Exchange-2"  />

      <button  onClick={sub} >Submit </button>
       
      

    </div>
   
  
  );
}

export default Dummy;