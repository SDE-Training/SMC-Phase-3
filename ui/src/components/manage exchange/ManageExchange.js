import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const ManageExchange = (props) => {
  let history =useHistory();
    const exchangeClick=() =>history.push('/admin/allexchange');
    const insertClick=() =>history.push('/admin/addexchange');
  return (
    <CardGroup>
     
       
      <Card body inverse color="info">
        
        <CardBody>
          <CardTitle tag="h5">Exchange</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">List of all Exchanges</CardSubtitle>
          <CardText/>
          <Button onClick ={exchangeClick}>Show</Button>
        </CardBody>
      </Card >
       <Card body inverse color="warning">
       <CardBody>
          <CardTitle tag="h5">ADD Exchange</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">add exchange</CardSubtitle>
          
          <Button onClick={insertClick}> Insert</Button>
          </CardBody>
      </Card>
     
    </CardGroup>
  );
};

export default ManageExchange;