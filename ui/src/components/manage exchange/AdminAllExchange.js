import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import './AddExchange'
import axios from 'axios'

class AdminAllExchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exchangelist: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/stockexchange/all')
            .then(response => {
                console.log(response)
                this.setState({ exchangelist: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        
        const listItems = this.state.exchangelist.map((d) => {
            return (
                <div>
                    <div className="get">
                          <div  key="uniqueId1">{d.stockExchangenid}</div>
                        <div>{d.stockExchange}</div>
                        
                        <div>{d.remarks}</div>
                        <div>{d.brief}</div>
                        <div>{d.contactAddress}</div>
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
                <h1 className="main">List of Exchange</h1>
                <div className="get">
                    <div>ExchangeId</div>
                    <div>ExchangeName</div>
                    {/* <div>Turnover</div> */}
                    <div>Remarks</div>
                    <div>BriefDescription</div>
                    <div>ContactAddress</div>
                    {/* <div>Action</div> */}
                </div>
                {listItems}
                <Link to='/admin/Addexchange'><button>Create New Exchange</button></Link>
                {/* {<Link to='/admin/updatecompany'>Edit</Link>} */}

            </div>
        )
    }
}

export default AdminAllExchange;