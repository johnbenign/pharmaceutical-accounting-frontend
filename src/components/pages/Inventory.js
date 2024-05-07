import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SideMenu from '../SideMenu';
import InventoryService from '../../services/InventoryService';

import * as ReactBootStrap from 'react-bootstrap';

class Inventory extends Component {

      constructor(props) {
        super(props)
      
        this.state = {
           inventories:[]
        }
      }

      componentDidMount()
      {
          InventoryService.getAllInventories().then(res => {
            this.setState({
              inventories:res.data
            })
          }).catch(error => {
            alert("error: " + error);
          });
      }

      deleteInventory(itemId)
      {
          InventoryService.deleteInventory(itemId).then(res => {
              try
              {
                if(res.data.result)
                {
                    console.log("item deleted successfully!");

                    this.setState({
                      inventories:this.state.inventories.filter(item => item.itemId !== itemId)
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
      

  render() {
    return <div >
      
      <div>
      <SideMenu/>
      </div>
          <h2 className="text-center">All Inventories</h2>
          <div className='row' style={{"width":"75px", "height":"50px", "marginLeft":"95%"}}>
            <ReactBootStrap.Button variant="primary" size="lg" onClick={()=>{this.props.history.push("/inventory/add")}}>ADD</ReactBootStrap.Button>
          </div>
          <div className="row">

              <ReactBootStrap.Table striped bordered hover>

                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Number Of Items</th>
                    <th>Selling Price</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {
                      this.state.inventories.map(
                        item => 
                          
                        <tr key={item.itemId}>
                        
                          <td onClick={() => this.props.history.push(`/inventory/${item.itemId}`)}>{item.itemName}</td>
                          <td>{item.description}</td>
                          <td>{item.numberOfItems}</td>
                          <td>{item.sellingPrice}</td>
                        
                          <td>
                            <button className='btn btn-danger' onClick={() => this.deleteInventory(item.itemId)}>Delete</button>
                          </td>
                        </tr>
                        
                      )
                  }
                </tbody>

              </ReactBootStrap.Table>

          </div>
    
      </div>;
  }
}

export default Inventory;
