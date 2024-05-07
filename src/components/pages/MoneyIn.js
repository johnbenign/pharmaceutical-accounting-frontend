import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import AccountService from '../../services/AccountService';

export class MoneyIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moneyInTxs:[],
            todayProfit:0.0
        }
    }

    componentDidMount()
      {
          AccountService.getAllTransactions().then(res => {
            this.setState({
                moneyInTxs:res.data
            })
          }).catch(error => {
            alert("error: " + error);
          });
      }

      getTotalProfit()
      {
        //   e.preventDefault();

          AccountService.getTotalProfit().then(res => {

            console.log("total profit: " + res.data);

            alert("Total profit is: " + res.data)
          }).catch(error =>{ 
              console.log(error);
          })
      }

      getTodayProfit()
      {
        //   e.preventDefault();

          AccountService.getTodayProfit().then(res => {

            console.log("profit: " + res.data);

            alert("Today profit is: " + res.data)
          }).catch(error =>{ 
              console.log(error);
          })
      }

      deleteTransaction(txId)
      {
          AccountService.deleteTransaction(txId).then(res => {
              try
              {
                if(res.data.result)
                {
                    console.log("transaction deleted successfully!");

                    this.setState({ 
                      moneyInTxs:this.state.moneyInTxs.filter(tx => tx.transactionId !== txId)
                    })
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
                  alert("error: "+ res.data.errorMsg);
              }
          }).catch(error => {
              console.log(error);
              alert(error);
          })
      }

    render() {
        return <div>
            {/* <h2 className="text-center">Money In Transactions</h2> */}
          <div className='row' style={{"width":"75px", "height":"30px", "marginLeft":"93%"}}>
            <ReactBootStrap.Button variant="primary" size="sm" onClick={()=>{this.props.history.push("/accounting/add")}}>ADD</ReactBootStrap.Button>
          </div>
            <div className="row">
            
                <ReactBootStrap.Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>Item Purchased</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Profit</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.moneyInTxs.filter(moneyInTx => moneyInTx.transactionType === "MONEY_IN").map(
                                moneyInTx =>

                                    <tr key={moneyInTx.transactionId}>
                                        <td style={{width:"20em"}}>{moneyInTx.item.itemName}</td>
                                        <td style={{width:"50px"}}>{moneyInTx.quantity}</td>
                                        <td style={{width:"10em"}}>{moneyInTx.item.sellingPrice*moneyInTx.quantity}</td>
                                        <td style={{width:"15em"}}>{moneyInTx.currentProfit}</td>

                                        <td style={{width:"20em"}}>
                                            {/* <button className='btn btn-danger' onClick={() => this.deleteTransaction(moneyInTx.transactionId)}>Delete</button> */}
                                        </td>
                                    </tr>

                            )
                        }
                    </tbody>

                </ReactBootStrap.Table>

        <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"70em", height:"30px"}}>
            <ReactBootStrap.Button variant="primary" size="lg" onClick={() => this.getTodayProfit()}>Get Today Profit</ReactBootStrap.Button>
            <ReactBootStrap.Button variant="primary" style={{marginLeft:"20px"}} size="lg" onClick={() => this.getTotalProfit()}>Get Total Profit</ReactBootStrap.Button>
          </div>

          

            </div>
        </div>
    }
}

export default MoneyIn;
