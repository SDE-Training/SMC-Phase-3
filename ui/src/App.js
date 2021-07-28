
import React, { useState } from 'react';
import Header from './components/Header'

import Admin from './components/AdminLandingPage';
import User from './components/UserLanding';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import ManageCompany from './components/managecompany/ManageCompany';
import CreateCompany from './components/managecompany/CreateCompany';
import AllCompany from './components/managecompany/AllCompany';
import  SheetJSApp from './components/importdata/importexcel';
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stockvstime from './components/charts/Stockvstime'
import SectorUser from './components/sector/SectorUser'
import SectorAdmin from './components/sector/SectorAdmin';
import Adminipo from './components/ipodetails/Adminipo';
import Useripo from './components/ipodetails/Useripo'
import ManageExchange from './components/manage exchange/ManageExchange';
import UpdateCompany from './components/managecompany/UpdateCompany';
import AddExchange from './components/manage exchange/AddExchange';
import AdminAllExchange from './components/manage exchange/AdminAllExchange';
import Adminallipo from './components/ipodetails/Adminallipo';
import Adminallsector from './components/sector/Adminallsector';
import Userallipo from './components/ipodetails/Userallipo';
import Userallsector from './components/sector/Userallsector';
import Other from './components/others/other';
import Comparecompany from './components/Compare Company/comparecompany'
import Addipo from './components/ipodetails/Addipo';
// import Comparecompany1 from './components/charts/practice';
import Dummy from './components/Compare Company/compareprac';

import Login from './Loginpage'

toast.configure();
function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div style={{width:'100%'}}>

      <Header />
   
  
    <Router>

    {
        !isLoggedIn && <Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
      }




        <Route path="/admin" component={Admin} />
        <Route path="/admin/manage" component={ManageCompany} />
        <Route path="/admin/company" component={AllCompany} />
        <Route path="/user" component={User} />
        <Route path="/admin/create" component={CreateCompany} />

        <Route path="/admin/import" component={ SheetJSApp} />
        <Route path="/admin/sector" component={ SectorAdmin} />
        <Route path="/admin/ipo" component={ Adminipo} />
        <Route path="/admin/exchange" component={ ManageExchange} />
        <Route path="/user/ipo" component={ Useripo} />
        <Route path="/user/sector" component={SectorUser} />
        
        <Route path="/admin/updatecompany" component={UpdateCompany} />
        <Route path="/admin/allexchange" component={AdminAllExchange} />
        <Route path="/admin/allipo" component={Adminallipo} />
        <Route path="/admin/allsector" component={Adminallsector} />
        <Route path="/user/allipo" component={Userallipo} />
        <Route path="/user/allsector" component={Userallsector} />
        <Route path="/user/other" component={Other} />
        <Route path="/admin/addexchange" component={AddExchange} />
        <Route path="/admin/addipo" component={Addipo} />
        <Route path="/user/compare" component={Comparecompany} />
        <Route path="/user/compare/chart" component={Stockvstime} />
        <Route path="/user/comparepr" component={Dummy} ></Route>

      </Router>
 


      <ToastContainer autoClose={5000}  />
 
    </div>


  );

}

export default App;
