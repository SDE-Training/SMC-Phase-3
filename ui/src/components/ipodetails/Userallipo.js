import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import './Userallipo.css'
import axios from 'axios'

class Userallipo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipolist: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/ipo/all')
            .then(response => {
                console.log(response)
                this.setState({ ipolist: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        
        const listItems = this.state.ipolist.map((d) => {
            return (
                <div>
                    <div className="get">
                          <div  key="uniqueId1">{d.ipoid}</div>
                        <div>{d.company_Name}</div>
                        
                        <div>{d.total_Number_of_Shares}</div>

                        <div></div>
                        <div>{d.price_per_Share}</div>
                        
                        <div>{d.openDateTime}</div>
                        
                        <div>{d.remarks}</div>

                        {/* <Route>
                            <Link to={'/admin/updatecompany/'} props={d}><button>Edit</button></Link>
                        </Route> */}

                    </div>


                </div>
            )
        }
        );
        return (
            <div>
                <h1 className="main">List of IPOs</h1>
                <div className="get">
                    <div>IPO Id</div>
                    <div>CompanyName</div>
                    {/* <div>Turnover</div> */}
                    <div>Total Shares</div>
                    <div>Price/share</div>
                    <div>Date/Time</div>
                    <div>Remarks</div>
                </div>
                {listItems}
                {/* <Link to='/admin/Addexchange'><button>Create New Exchange</button></Link> */}
                {/* {<Link to='/admin/updatecompany'>Edit</Link>} */}

            </div>
        )
    }
}

export default Userallipo;