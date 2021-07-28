import React from 'react';


import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import {
    Card, Button, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
const SectorUser = () => {

    const history = useHistory();
    const list1Click = () => history.push('/user/allsector');
    const companyClick = () => history.push('/admin/company');

    return (
        <CardGroup>
            <Card body inverse color="warning">

                <CardBody>
                    <CardTitle tag="h5">Sectors</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Present sectors</CardSubtitle>
                    <CardText></CardText>
                    <div />
                    <Button onClick ={list1Click}>Show</Button>
                </CardBody>
            </Card>
            <Card body inverse color="info">

                <CardBody >
                    <CardTitle tag="h5">Company</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">All company affiliated to a sector</CardSubtitle>
                    <CardText></CardText>
                    <Button onClick={companyClick}>Show</Button>
                </CardBody>
            </Card>
            {/* <Card>
       
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card> */}
        </CardGroup>
    );
};

export default SectorUser;