import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import AccountService from '../../services/AccountService';

export class MoneyOut extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        moneyInTxs:[]
      }
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
                  alert("error: "+ error);
              }
          }).catch(error => {
              console.log(error);
              alert(error);
          })
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
    
  render() {
    return <div>

    <div className='row' style={{"width":"75px", "height":"50px", "marginLeft":"95%"}}>
            <ReactBootStrap.Button variant="primary" size="lg" onClick={()=>{this.props.history.push("/accounting/addExpense")}}>ADD</ReactBootStrap.Button>
          </div>
            <div className="row">

                <ReactBootStrap.Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.moneyInTxs.filter(moneyInTx => moneyInTx.transactionType === "MONEY_OUT").map(
                                moneyInTx =>

                                    <tr key={moneyInTx.transactionId}>
                                        <td style={{width:"20em"}}>{moneyInTx.itemName}</td>
                                        <td style={{width:"20em"}}>{moneyInTx.amount}</td>
                                  
                                        <td style={{width:"20em"}}>
                                            {/* <button className='btn btn-danger' onClick={() => this.deleteTransaction(moneyInTx.transactionId)}>Delete</button> */}
                                        </td>
                                    </tr>

                            )
                        }
                    </tbody>

                </ReactBootStrap.Table>

            </div>

    </div>
  }
}

export default MoneyOut;
