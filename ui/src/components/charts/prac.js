import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Card, InputGroupText } from 'reactstrap';

const Example = () => {
    const history=useHistory();
   const clickhan=()=>{history.push('/user/ipo');}
  return (
  
 <div>
  <Input>pankaj</Input>
  <Button onClick={clickhan}>Click</Button>

</div> 
  );
}

export default Example;