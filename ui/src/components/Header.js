import React, { Component } from 'react';
import {Container,Button} from 'reactstrap';
  


function Header () {


    const logout=()=>{window.location.href='/';}
    return (
        <Container fluid={true}>
      
        <h2  fluid="xl"  style= {{color: 'Red' ,textAlign : "center",marginTop:-30,width:'100%'}}>
            Company Stock Marketing Chart
        </h2>
        <Button size="sm" style={{ float: 'right' ,marginTop:-10,}}  onClick={logout}>logout</Button>
        
        </Container>
    )
}
export default Header;