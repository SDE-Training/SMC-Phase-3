import React, { Component } from 'react';

class Other extends React.Component {
    
  
    render() {
      return(
        <div >
<h1>Contact details</h1>
<form id="contact-form"  method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text"  />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button  className="btn btn-primary">Submit</button>
</form>
</div>)
  }}
  
  export default Other;