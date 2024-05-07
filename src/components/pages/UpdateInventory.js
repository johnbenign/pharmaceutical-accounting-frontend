import React, { Component } from 'react';
import InventoryService from '../../services/InventoryService';
import Footer from '../Footer';
import Header from '../Header';
import SideMenu from '../SideMenu';

export class UpdateInventory extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         itemId:this.props.match.params.itemId,
         itemName:'',
         description:'',
         numberOfItems:'',
         costPrice:0.0,
         sellingPrice:0.0
      }
    }

    changeHandler = event =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount()
    {
        InventoryService.getInventoryById(this.state.itemId).then(res => {

            let inventory = res.data;

            this.setState({
                itemName:inventory.itemName,
                description:inventory.description,
                numberOfItems:inventory.numberOfItems,
                costPrice:inventory.costPrice,
                sellingPrice:inventory.sellingPrice
            })
        }).catch(error => {
            console.log(error);
        })
    }

    updateInventory = (e) =>
    {
        e.preventDefault();

        let inventory = {itemName:this.state.itemName,
            description:this.state.description, 
            costPrice:this.state.costPrice, 
            sellingPrice:this.state.sellingPrice, 
            numberOfItems:this.state.numberOfItems,
            itemId:this.state.itemId
        }

        console.log(JSON.stringify(inventory));

        InventoryService.updateInventory(inventory).then(res => {
            try
            {
                if(res.data.result)
                {
                    console.log("item updated successfully!");
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
            }
            
            
        }).catch(error => {
            console.log(error);
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
                    <h3 className='text-center'>Update Inventory</h3>
                    <div className='card-body'>
                        <form onSubmit={this.updateInventory}>
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
                            <button className='btn btn-success' type='submit'>Update</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>

        <Footer/>
    </div>;
  }
}

export default UpdateInventory;
