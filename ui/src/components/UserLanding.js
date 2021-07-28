import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function User() {
    const history=useHistory();
const  ipoClick=()=>history.push("/user/ipo");
const  companyClick=()=>history.push('/user/comparepr');
const  sectorClick=()=>history.push("/user/sector");
const  otherClick=()=>history.push("/user/other");

    return (
        <div >
            <div>
                <h2  style={{ color: 'white', textAlign: "center", background: "blue",}}>
                    User
           
                </h2>

            </div>

            <ButtonGroup className='d-flex' size="lg" style={{ marginTop: 40 }} >
                <Button outline color ="primary " onClick={ipoClick} >IPOs</Button>
                <Button outline color="secondary"onClick={companyClick}>Compare Company</Button>
                <Button outline color="success" onClick={sectorClick}> Sectors </Button>
                <Button outline color="warning" onClick={otherClick}>others</Button>

            </ButtonGroup>


        </div>

    );
}
export default User;
