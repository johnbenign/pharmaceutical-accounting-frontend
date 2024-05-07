import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import SideMenu from '../SideMenu';
import InventoryService from '../../services/InventoryService';

class AddInventory extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         itemName:'',
         description:'',
         costPrice:0.0,
         sellingPrice:0.0,
         numberOfItems:0
      }
    }

    changeHandler = event =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNewInventory = (e) =>
    {
        e.preventDefault();

        let inventory = {itemName:this.state.itemName,
            description:this.state.description, 
            costPrice:this.state.costPrice, 
            sellingPrice:this.state.sellingPrice, 
            numberOfItems:this.state.numberOfItems
        }

        console.log(JSON.stringify(inventory));

        InventoryService.createInventory(inventory).then(res => {
            try
            {
                if(res.data.result)
                {
                    console.log("item created successfully!");
                    this.props.history.push("/inventory");
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

    cancel()
    {
        this.props.history.push("/inventory");
    }
    
  render() {
    return <div>
        <Header/>
        <SideMenu/>

        <div className="container">
            <div className="row">
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Inventory</h3>
                    <div className='card-body'>
                        <form onSubmit={this.addNewInventory}>
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input placeholder='Item Name' name='itemName' className='form-control' value={this.state.itemName} onChange={this.changeHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Description:</label>
                                <input placeholder='Item Description' name='description' className='form-control' value={this.state.description} onChange={this.changeHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Number of items</label>
                                <input placeholder='Number of items purchased' name='numberOfItems' className='form-control' value={this.state.numberOfItems} onChange={this.changeHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Cost Price</label>
                                <input placeholder='Cost Price' name='costPrice' className='form-control' value={this.state.costPrice} onChange={this.changeHandler}/>
                            </div>

                            <div className="form-group">
                                <label>Selling Price</label>
                                <input placeholder='Selling Price' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/>
                            </div>
                            <br/>
                            <button className='btn btn-success' type='submit'>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* <ReactBootStrap.Form style={{"marginLeft":"250px"}}>
            <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicEmail">
                <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
                <ReactBootStrap.Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </ReactBootStrap.Form.Text>
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicPassword">
                <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control type="password" placeholder="Password" />
            </ReactBootStrap.Form.Group>
            <ReactBootStrap.Form.Group className="mb-3" controlId="formBasicCheckbox">
                <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
            </ReactBootStrap.Form.Group>
            <ReactBootStrap.Button variant="primary" type="submit">
                Submit
            </ReactBootStrap.Button>
        </ReactBootStrap.Form> */}
        {/* <Footer/> */}

    </div>
  }
}

export default AddInventory;
