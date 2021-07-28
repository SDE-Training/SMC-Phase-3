import React, { Component } from 'react'
import './UpdateCompany.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
class UpdateCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyid: '',
            company_Name: '',
            ceo: '',
            turnover: '',
            write_Up :'',
            sector: ''
        }
    }
    componentWillMount() {
        this.getdetails();
    }
    getdetails() {
        console.log(this.props.match.params.id);
        let name = this.props.match.params.id;
        console.log('http://localhost:8080/company/find/28');
        axios.get('http://localhost:8080/company/find/28')
            .then(response => {
                this.setState({
                    companyid: response.data[1].companyid,
                    company_Name: response.data[0].company_Name,
                    ceo: response.data[0].ceo,
                    turnover: response.data[0].turnover,
                   write_Up: response.data[0].write_Up,
                    // sector: response.data[0].sector
                }, () => {
                    console.log(this.state);

                });
            })
            .catch(error => {
                console.log(error);
            })

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = e => {
        // e.preventDefault()
        console.log(this.state)

        axios.put(`http://localhost:8080/company/companies/${this.state.companyid}`, this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)

            }

            )
    }
    submit = () => {
        this.props.history.push('admin/company');
    }
    render() {
        return (
            <div className="create">
                <h1 className="main">Update Company</h1>
                <form className="form" onSubmit={this.submit} >
                    <div>
                        <label></label>
                        <input type="text" name="companyid" value={this.state.companyid} onChange={this.changeHandler} placeholder='Company ID'/>
                    </div>
                    <br />
                    <div>
                        <label></label>
                        <input type="text" name="company_Name" value={this.state.company_Name} onChange={this.changeHandler} placeholder='Company Name'/>
                    </div>
                    <br />
                    <div>
                        <label></label>
                        <input type="text" name="ceo" value={this.state.ceo} onChange={this.changeHandler} placeholder='CEO Name'/>
                    </div>
                    <br />
                    <div>
                        <label></label>
                        <input type="number" name="turnover" value={this.state.turnover} onChange={this.changeHandler}placeholder='TurnOver'/>
                    </div>
                    <br />

                    <div>
                        <label></label>
                        <input type="text" name="write_Up" value={this.state.write_Up} onChange={this.changeHandler} placeholder='Brief Description'/>
                    </div>
                    <br />
                    <div>
                        <label></label>
                        <input type="text" name="sector" value={this.state.sector} onChange={this.changeHandler} placeholder='Sector' />
                    </div>
                    <button className="save" type="submit" onClick={this.SubmitHandler} >Save</button>
                </form >

            </div>
        )
    }
}

export default UpdateCompany