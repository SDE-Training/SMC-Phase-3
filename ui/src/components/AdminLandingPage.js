import React from 'react'
import { Button, ButtonGroup, Col } from 'reactstrap';
import { Link,useHistory } from "react-router-dom";

function Admin() {
  const history = useHistory();
  const importClick = () => history.push('/admin/import');
   const companyClick = () => history.push('/admin/manage');
   const exchangeClick = () => history.push('/admin/exchange');
   const ipoClick = () => history.push('/admin/ipo');
   const sectorClick = () => history.push('/admin/sector');


  return (
    <div   >
      

      <ButtonGroup className='d-flex' size="lg" style={{ marginTop: 50 }} >
        <Button outline color="primary " onClick ={importClick}>ImportData</Button>
        <Button outline color="secondary"onClick={companyClick}>Manage Company</Button>
        <Button outline color="success" onClick={exchangeClick}>Manage Exchange </Button>
        <Button outline color="warning" onClick={ipoClick}>Ipo Details</Button>
        {/* <Button outline color="info" onClick={sectorClick}>Sectors</Button> */}
      </ButtonGroup>

    </div>
  
  );}
export default Admin;
