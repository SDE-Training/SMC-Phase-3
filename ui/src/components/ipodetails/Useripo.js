
import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Adminipo = (props) => {
  let history=useHistory();
    const ipoClick=() => history.push('/user/allipo')
  return (
 
      <Card body inverse color="info">
        
        <CardBody>
          <CardTitle tag="h5">Ipo</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">List of all upcoming IPOs</CardSubtitle>
          <CardText/>
          <Button onClick ={ipoClick}>Show</Button>
        </CardBody>
      </Card>
     
   
  );
};

export default Adminipo;