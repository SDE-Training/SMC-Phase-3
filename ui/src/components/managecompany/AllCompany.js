import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import CreateCompany from './CreateCompany'
import './AllCompany.css'
import axios from 'axios'
import Update from './UpdateCompany'//change
class AllCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companylist: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/company/all')
            .then(response => {
                console.log(response)
                this.setState({ companylist: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        /* const companylist = [
             {
                 companyName: "samsung",
                 ceoname: "ceo",
                 brief: "Mobile Company",
                 sector: "BSE"
             },
             {
                 companyName: "apple",
                 ceoname: "ceo",
                 brief: "mac",
                 sector: "BSE/NSE"
             }
 
         ];*/
        const listItems = this.state.companylist.map((d) => {
            return (
                <div>
                    <div className="get">
                          <div  key="uniqueId1">{d.companyid}</div>
                        <div>{d.company_Name}</div>
                        <div>{d.turnover}</div>
                        <div>{d.ceo}</div>
                        <div>{d.write_Up}</div>
                        <Route>
                            <Link to={'/admin/updatecompany/'} props={d}><button>Edit</button></Link>
                        </Route>

                    </div>


                </div>
            )
        }
        );
        return (
            <div>
                <h1 className="main">List of Companies</h1>
                <div className="get">
                    <div>CompanyId</div>
                    <div>CompanyName</div>
                    <div>Turnover</div>
                    <div>CEO/BOD</div>
                    <div>BriefDescription</div>
                    <div>Sector</div>
                    <div>Action</div>
                </div>
                {listItems}
                <Link to='/admin/create'><button>Create New Company</button></Link>
                {/* {<Link to='/admin/updatecompany'>Edit</Link>} */}

            </div>
        )
    }
}

export default AllCompany;