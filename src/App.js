import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import {createBrowserHistory} from 'history';
import Inventory from './components/pages/Inventory';
import Accounting from './components/pages/Accounting';
import AddInventory from './components/pages/AddInventory';
import UpdateInventory from './components/pages/UpdateInventory';
import AddMoneyInTx from './components/pages/AddMoneyInTx';
import AddMoneyOutTx from './components/pages/AddMoneyOutTx';
import Footer from './components/Footer';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Diagnose from './components/pages/Diagnose';

//export const customHistory = createBrowserHistory();

function App() {

  const browserHistory = createBrowserHistory();

  // return(
    // <Router history={browserHistory}>

    //   <Switch>
    //     <Route exact path='/' component={SideMenu}/>
    //     <Route  path="/inventory" component={Inventory}/>
    //     <Route  path="/accounting" component={Accounting}/>
    //   </Switch>

    // </Router>
  // <SideMenu/>);

  return (<div className="App">
    <Router history={browserHistory}>
    
      <Header/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route  path="/login" component={Login} />
            <Route  path="/sign-up" component={SignUp} />
            {/* <Route  path="/home" component={SideMenu}/> */}
            <Route exact path="/inventory" component={Inventory}/>
            <Route exact path="/accounting" component={Accounting}/>
            <Route exact path="/diagnose" component={Diagnose}/>
            {/* <Route exact path="/accounting/moneyIn" component={MoneyIn}/> */}
            <Route  path="/accounting/add" component={AddMoneyInTx}/>
            <Route  path="/accounting/addExpense" component={AddMoneyOutTx}/>
            <Route  path="/inventory/add" component={AddInventory}/>
            <Route  path="/inventory/:itemId" component={UpdateInventory}/>
          </Switch>
        
          </Router>
          </div>
  );
}

export default App;