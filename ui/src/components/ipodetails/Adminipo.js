import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Adminipo = (props) => {
  const history=useHistory();

    const ipoClick=() =>history.push('/admin/allipo');//working insert component here
    const insertClick=() =>history.push('/admin/addipo');//working insert component here
  return (
    <CardGroup>
     
       
      <Card body inverse color="info">
        
        <CardBody>
          <CardTitle tag="h5">Ipo</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">List of all upcoming IPOs</CardSubtitle>
          <CardText/>
          <Button onClick ={ipoClick}>Show</Button>
        </CardBody>
      </Card >
       <Card body inverse color="success">
       <CardBody>
          <CardTitle tag="h5">ADD</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">add Ipos</CardSubtitle>
          
          <Button onClick={insertClick}> Insert</Button>
          </CardBody>
      </Card>
     
    </CardGroup>
  );
};

export default Adminipo;