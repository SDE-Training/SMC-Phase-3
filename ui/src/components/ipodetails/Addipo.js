import React, { Component } from 'react'

import axios from 'axios'
import { withRouter } from 'react-router-dom';
class Addipo extends Component {
    constructor() {
        super();
        this.state = {
            ipoid:''   , //companyId: '',
            company_Name:'', // companyName: '',
            price_per_Share: '',
            openDateTime: '',
            total_Number_of_Shares: '',
           remarks: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        // e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/ipo/addipo', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }

            )
    }
    submit = () => {
        this.props.history.push('/admin/ipo');
    }
    render() {
        return (
            <div className="create">
                <h1 className="main">ADD IPO</h1>
                <form className="form" onSubmit={this.submit}>
                    <div>
                        {/* <label>IPO ID</label> */}
                        <input type="number" name="ipoid" value={this.state.ipoid} onChange={this.changeHandler} placeholder='IPOID' />
                    </div>
                    <br />
                    <div>
                        {/* <label>Company Name</label> */}
                        <input type="text" name="company_Name" value={this.state.company_Name} onChange={this.changeHandler}  placeholder='Company Name'/>
                    </div>
                    <br />
                    <div>
                        {/* <label>Price/Share</label> */}
                        <input type="number" name="price_per_Share" value={this.state.price_per_Share} onChange={this.changeHandler} placeholder='Price/Share' />
                    </div>
                    <br />
                    <div>
                        {/* <label>Total Share</label> */}
                        <input type="text" name="total_Number_of_Shares" value={this.state.total_Number_of_Shares} onChange={this.changeHandler}  placeholder='Total Number Of Share'/>
                    </div>
                    <br />
                    <br />
                    <div>
                        {/* <label>Date/Time</label> */}
                        <input type="datetime-local" name="openDateTime" value={this.state.openDateTime} onChange={this.changeHandler} placeholder='Timestamp' />
                    </div>
                    <br />

                   
                    <br />
                    <div>
                        {/* <label>Remarks</label> */}
                        <input type="text" name="remarks" value={this.state.remarks} onChange={this.changeHandler} placeholder='Remarks'/>
                    </div>
                    <button className="save" type="submit" onClick={this.SubmitHandler}>Save</button>
                </form >
            </div>
        )
    }
}

export default Addipo;