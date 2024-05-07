import React, { Component } from 'react';
import InventoryService from '../../services/InventoryService';
import Header from '../Header';
import SideMenu from '../SideMenu';
import Footer from '../Footer';
import AccountService from '../../services/AccountService';

export class AddMoneyInTx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          itemId:'',
          quantity:0,
          transactionType:'MONEY_IN',
          sellingPrice:0,
          items:[]
         
      }
    }

    componentDidMount()
    {
        InventoryService.getAllInventories().then(res => {
            this.setState({
              items:res.data
            })
          }).catch(error => {
            alert("error: " + error);
          });
    }

    changeHandler = event =>
    {
        console.log(" --- event : " + [event.target.name] + ": " + event.target.value);

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSelectChangeHandler = e =>
    {
        console.log(" --- event : " + [e.target.name] + ": " + e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })

        console.log("item id: " + e.target.value)

        InventoryService.getInventoryById(e.target.value).then(res => {
            console.log("updating the input component")

            let item = res.data;

            console.log("item price: " + item.sellingPrice);
            let unitPrice = item.sellingPrice;
            this.setState({
                sellingPrice:unitPrice
            })

            console.log("updated")
        }).catch(error => {
            alert(error);
        })
    }

    cancel()
    {
        this.props.history.push("/accounting");
    }

    addNewIncomeTx = (e) =>
    {
        e.preventDefault();

        let incomeTx = {
            itemId:this.state.itemId,
            quantity:this.state.quantity, 
            transactionType:this.state.transactionType
        }

        console.log(JSON.stringify(incomeTx));

        AccountService.addTransaction(incomeTx).then(res => {
            try
            {
                if(res.data.result)
                {
                    console.log("new tx added successfully");
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
                    <h3 className='text-center'>Record Transaction</h3>
                    <div className='card-body'>
                        <form onSubmit={this.addNewIncomeTx}>
                            <div className="form-group">
                                <label>Item: </label>
                                {/* <input placeholder='Item Name' name='itemName' className='form-control' value={this.state.itemName} onChange={this.changeHandler}/> */}
                                <select name='itemId' className='form-control' value={this.state.itemId} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    {
                                        this.state.items.map(item => (
                                            <option key={item.itemId} value={item.itemId}>{item.itemName}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Unit Price: </label>
                                <input disabled placeholder='Unit Price' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Quantity</label>
                                <input name='quantity' className='form-control' value={this.state.quantity} onChange={this.changeHandler}/>
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

export default AddMoneyInTx;
