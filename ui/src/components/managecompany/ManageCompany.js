import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';

    function ManageCompany() {
      
        const history = useHistory();
        const listClick = () => history.push('/admin/company');
        const updateClick = () => history.push('/admin/company');
        const createClick = () => history.push('/admin/create');
        const deleteClick = () => history.push('/admin/delete');
    return (
        <Row style={{marginTop:10}}>
            <div  >
                <Card  color="primary " >
                    
                    <CardBody >
                        <CardTitle tag="h5">Company List</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <CardText>List of all enrolled companies</CardText>
                        <Button onClick={listClick}>Button</Button>
                    </CardBody>
                </Card>
            </div>
            <div style={{marginTop:5}}>
                <Card color='info'>
                   
                    <CardBody>
                        <CardTitle tag="h5">Update</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">add details</CardSubtitle>
                        <CardText>Update the information of enrolled companies ex- IPOs,StockExchanges</CardText>
                        <Button onClick ={updateClick}>Button</Button>
                    </CardBody>
                </Card>
            </div>
            <div style={{marginTop:5}}>
                <Card color ='warning'>
                   
                    <CardBody>
                        <CardTitle tag="h5">Add</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Add Company</CardSubtitle>
                        <CardText></CardText>
                        <Button onClick={createClick}>Button</Button>
                    </CardBody>
                </Card>
            </div>
            {/* <div style={{marginTop:5}}>
                <Card color ='danger'>
                   
                    <CardBody>
                        <CardTitle tag="h5">Delete Company</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Drop Company from Database</CardSubtitle>
                        <CardText></CardText>
                        <Button onClick={deleteClick}>delete</Button>
                    </CardBody>
                </Card>
            </div> */}
        </Row>

    );
}
export default ManageCompany;
