import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import './Adminallsector'
import axios from 'axios'

class Adminallsector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectorlist: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/sector/all')
            .then(response => {
                console.log(response)
                this.setState({ sectorlist: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        
        const listItems = this.state.sectorlist.map((d) => {
            return (
                <div>
                    <div className="get">
                          <div  key="uniqueId1">{d.sectorid}</div>
                        <div/>
                        
                        <div>{d.sectorName}</div>
                        <div/>
                        
                         <div>{d.brief}</div>
                        {/* <div>{d.contactAddress}</div> */}
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
                <h1 className="main">List of Sector</h1>
                <div className="get">
                    <div>SectorId</div>
                    <div>SectorName</div>
                    {/* <div>Turnover</div> */}
                   
                    <div>BriefDescription</div>
                   
                    {/* <div>Action</div> */}
                </div>
                {listItems}
                {/* <Link to='/admin/Addexchange'><button>Create New Exchange</button></Link> */}
                {/* {<Link to='/admin/updatecompany'>Edit</Link>} */}

            </div>
        )
    }
}

export default Adminallsector;