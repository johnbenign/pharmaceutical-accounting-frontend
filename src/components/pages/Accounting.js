import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import SideMenu from '../SideMenu';
import MoneyIn from './MoneyIn';
import MoneyOut from './MoneyOut';

class Accounting extends Component
{
  constructor(props) {
    super(props)
  
    this.state = {
       selectedTab:'income'
    }
  }

  componentDidMount(){
    this.setState({
      selectedTab:'income'
    })
  }
  
  render() {
    return(
    <div>
      
      <div>
      <SideMenu/>
      </div>
        <ReactBootStrap.Tabs style={{display:"flex", alignItems:"center", justifyContent:"center"}} defaultActiveKey='income' id="uncontrolled-tab-example" className="mb-3">
        <ReactBootStrap.Tab eventKey="income" title="Income">
          <MoneyIn history={this.props.history}/>
        </ReactBootStrap.Tab>
        <ReactBootStrap.Tab eventKey="expense" title="Expense">
          <MoneyOut history={this.props.history}/>
        </ReactBootStrap.Tab>
      </ReactBootStrap.Tabs>
    </div>
    )
  
  }
}

export default Accounting;
