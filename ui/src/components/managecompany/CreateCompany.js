import axios from 'axios';
import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './CreateCompany.css'
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
class CreateCompany extends Component {

    constructor() {
        super();

        this.state = {
            company_Name: '',
            ceo: '',
            turnover: '',
            write_Up: '',
            board_of_Directors: '',
            sector: ''
        }
    }
    changecompany_Name = (event) => {
        this.setState({ company_Name: event.target.value });
        toast.success('Company:'+ this.state.company_Name+' is  Added',{autoClose:8000});
        
         
    }
    changeCeo = (event) => {
        this.setState({ ceo: event.target.value })
    }
    changeTurnover = (event) => {
        this.setState({ turnover: event.target.value })
    }
    changebrf = (event) => {
        this.setState({ write_Up: event.target.value })
    }
    changebod = (event) => {
        this.setState({ board_of_Directors: event.target.value });

    }
    changesector = (event) => {

        this.setState({ sector: event.target.value });

    }
    submitbutton = (event) => {
        
        axios.post(`http://localhost:8080/company/addCompany/${this.state.sector}`, this.state)
            .then(Response => {
                console.log(Response);
                toast.success('Company:'+ this.state.company_Name+' is  Added',{autoClose:8000});
            })
            .catch(error => {
                console.log(error());
                toast.error('Sector:'+this.state.sector+'does not exist');
            })
    }
    render() {
        return (
            <div className="create">
                <h1 className="main">Create New Company</h1>
           
                <Form>
                    <div >
                        <label >Company Name</label>
                        <input type="text" value={this.state.company_Name} onChange={this.changecompany_Name} />
                    </div>
                    <br />
                    <div>
                        <label>CEO Name</label>
                        <input type="text" value={this.state.ceo} onChange={this.changeCeo} />
                    </div>
                    <br />
                    <div>
                        <label>BoardofDirectors</label>
                        <input type="text" value={this.state.board_of_Directors} onChange={this.changebod} />
                    </div>
                    <br />
                    <div>
                        <label>TurnOver</label>
                        <input type="number" value={this.state.turnover} onChange={this.changeTurnover} />

                    </div>
                    <br />

                    <div>
                        <label>Brief Description</label>
                        <input type="text" value={this.state.write_Up} onChange={this.changebrf} />
                    </div>
                    <br />


                    <div>
                        <label>Sector</label>
                        <input type="text" value={this.state.sector} onChange={this.changesector} />
                    </div>
                    <br />

                    <button className="save"  onChange={this.submitbutton}>Save</button>
                </Form >
                <ToastContainer autoClose={5000}  />
            </div>
        )
    }
}

export default CreateCompany;