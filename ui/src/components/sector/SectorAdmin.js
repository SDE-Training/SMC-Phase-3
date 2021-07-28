import React from 'react';


// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import {
    Card, Button, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
const SectorAdmin = () => {

    //const usehistory = useHistory();
   
   let history = useHistory();
  const list1Click = () =>history.push("/admin/allsector");
   
//    const list1Click = () =>usehistory. push();
    const companyClick = () =>history.push("/admin/manage");
    const insertClick=() =>history.push("aadmin/manage");
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
            {/* <Card body inverse color="info">

                <CardBody >
                    <CardTitle tag="h5">Company</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">All company affiliated to a sector</CardSubtitle>
                    <CardText></CardText>
                    <Button onClick={companyClick}>Show</Button>
                </CardBody>
            </Card> */}
            <Card body inverse color="info">
       
        <CardBody  >
          <CardTitle tag="h5">Add Sector</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Insert new sector in Database</CardSubtitle>
          <CardText/>
          <Button onClick={insertClick}>Insert</Button>
        </CardBody>
      </Card>
        </CardGroup>
    );
};

export default SectorAdmin;