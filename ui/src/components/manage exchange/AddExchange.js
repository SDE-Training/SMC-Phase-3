import React, { Component } from 'react'
import './AddExchange.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
class AddExchange extends Component {
    constructor() {
        super();
        this.state = {
            stockExchangenid:''   , //companyId: '',
            stockExchange:'', // companyName: '',
           
            contactAddress: '',
            brief: '',
           remarks: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        // e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/stockexchange/addexchange/exchangename', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }

            )
    }
    submit = () => {
        this.props.history.push('/admin/exchange');
    }
    render() {
        return (
            <div className="create">
                <h1 className="main">Create New Exchange</h1>
                <form className="form" onSubmit={this.submit}>
                    <div>
                        {/* <label>Exchange ID</label> */}
                        <input type="number" name="stockExchangenid" value={this.state.stockExchangenid} onChange={this.changeHandler} placeholder='Exchange ID' />
                    </div>
                    <br />
                    <div>
                        {/* <label>Exchange Name</label> */}
                        <input type="text" name="stockExchange" value={this.state.stockExchange} onChange={this.changeHandler}  placeholder='Exchange Name'/>
                    </div>
                    <br />
                    <div>
                        {/* <label>Brief</label> */}
                        <input type="text" name="brief" value={this.state.brief} onChange={this.changeHandler} placeholder='Brief'/>
                    </div>
                    <br />
                    <div>
                        {/* <label>Contact</label> */}
                        <input type="text" name="contactAddress" value={this.state.contactAddress} onChange={this.changeHandler}  placeholder='Contact Details'/>
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

export default AddExchange;