import React, { Component } from 'react';
import InventoryService from '../../services/InventoryService';
import Header from '../Header';
import SideMenu from '../SideMenu';
import Footer from '../Footer';
import AccountService from '../../services/AccountService';

export class AddMoneyOutTx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        itemName:'',
        amount:0,
        transactionType:'MONEY_OUT',
        items:[]
      }
    }

    changeHandler = event =>
    {
        console.log(" --- event : " + [event.target.name] + ": " + event.target.value);

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cancel()
    {
        this.props.history.push("/accounting");
    }

    addNewExpenseTx = (e) =>
    {
        e.preventDefault();

        let incomeTx = {
            itemName:this.state.itemName,
            amount:this.state.amount, 
            transactionType:this.state.transactionType
        }

        console.log(JSON.stringify(incomeTx));

        AccountService.addTransaction(incomeTx).then(res => {
            try
            {
                if(res.data.result)
                {
                    console.log("new expense recorded successfully");
                    this.props.history.push("/accounting");
                }
                else
                {
                    console.log("error: " + res.data.response);

                    throw new Error(res.data.errorMsg);
                }
            }
            catch(error)
            {
                console.log("error: " + error);
                alert("error: " + error);
            }
            
            
        }).catch(error => {
            console.log(error);
            alert("error: " + error);
        })
    }
    
  render() {
    return <div>
        <Header/>
        <SideMenu/>

        <div className="container">
            <div className="row">
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Record Expense</h3>
                    <div className='card-body'>
                        <form onSubmit={this.addNewExpenseTx}>
                            <div className="form-group">
                                <label>Item Name: </label>
                                <input placeholder='Item Name' name='itemName' className='form-control' value={this.state.itemName} onChange={this.changeHandler}/>
                                {/* <select name='itemId' className='form-control' value={this.state.itemId} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    {
                                        this.state.items.map(item => (
                                            <option key={item.itemId} value={item.itemId}>{item.itemName}</option>
                                        ))
                                    }
                                </select> */}
                            </div>

                            <div className="form-group">
                                <label>Cost: </label>
                                <input placeholder='Amount you spent' name='amount' className='form-control' value={this.state.amount} onChange={this.changeHandler}/>
                            </div>
                            <br/>
                            <button className='btn btn-success' type='submit'>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        
        {/* <Footer/> */}
    </div>;
  }
}

export default AddMoneyOutTx;
