import React, { Component } from 'react'
import DiagnoseService from '../../services/DiagnoseService'
import Header from '../Header'
import SideMenu from '../SideMenu'

class Diagnose extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         headache:'',
         fever:'',
         cold:'',
         bodyAche:'',
         tiredness:'',
         vomiting:'',
         cough:'',
         coughBloodOrMucus:'',
         coughDuration:'',
         chestPainWhenCoughingOrBreathing:'',
         weightLoss:'',
         thirst:'',
         rapidHeartRate:'',
         prescriptions:[]
      }
    }

    onSelectChangeHandler = event =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    diagnose = (e) =>
    {
        e.preventDefault();

        let data = {
            headache:this.state.headache,
            fever:this.state.fever, 
            cold:this.state.cold, 
            bodyAche:this.state.bodyAche, 
            tiredness:this.state.tiredness,
            vomiting:this.state.vomiting, 
            cough:this.state.cough,
            coughBloodOrMucus:this.state.coughBloodOrMucus,
            coughDuration:this.state.coughDuration,
            chestPainWhenCoughingOrBreathing:this.state.chestPainWhenCoughingOrBreathing,
            weightLoss:this.state.weightLoss,
            thirst:this.state.thirst,
            rapidHeartRate:this.state.rapidHeartRate
        }

        console.log(JSON.stringify(data));

        DiagnoseService.diagnose(data).then(res => {
            try
            {
                if(res.data.result)
                {
                    console.log("You probably have " + res.data.response + "\n\nTake the following drugs:\n\t" + res.data.prescriptions);
                    
                    //this.state.prescriptions = res.data.prescriptions;

            

                    alert("You probably have " + res.data.response + "\n\nTake the following drugs:\n\t" + res.data.prescriptions)
                    //this.props.history.push("/inventory");
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
    return (
      <div>
        <Header/>
        <SideMenu/>

        <div className="container">
            <div className="row">
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Diagnose</h3>
                    <div className='card-body'>
                        <form onSubmit={this.diagnose}>
                            <div className="form-group">
                                <label>Do you have headache:</label>
                                <select name='headache' className='form-control' value={this.state.headache} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Do you have fever:</label>
                                <select name='fever' className='form-control' value={this.state.fever} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='Item Description' name='description' className='form-control' value={this.state.description} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Do you have cold</label>
                                <select name='cold' className='form-control' value={this.state.cold} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='Number of items purchased' name='numberOfItems' className='form-control' value={this.state.numberOfItems} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Do you experience body ache</label>
                                <select name='bodyAche' className='form-control' value={this.state.bodyAche} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='Cost Price' name='costPrice' className='form-control' value={this.state.costPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Do you experience tiredness</label>
                                <select name='tiredness' className='form-control' value={this.state.tiredness} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Are you vomiting</label>
                                <select name='vomiting' className='form-control' value={this.state.vomiting} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Do you have cough</label>
                                <select name='cough' className='form-control' value={this.state.cough} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Do you cough blood or mucus</label>
                                <select name='coughBloodOrMucus' className='form-control' value={this.state.coughBloodOrMucus} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>If yes, For how long have you been having this cough</label>
                                <select name='coughDuration' className='form-control' value={this.state.coughDureation} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="LessThanOneWeek">Less than one week</option>
                                    <option key="no" value="OverOneWeek">Over a week</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Do you experience chest pain when coughing or breathing</label>
                                <select name='chestPainWhenCoughingOrBreathing' className='form-control' value={this.state.chestPainWhenCoughingOrBreathing} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Are you experiencing weight loss</label>
                                <select name='weightLoss' className='form-control' value={this.state.weightLoss} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Do you feel extremely thirsty</label>
                                <select name='thirst' className='form-control' value={this.state.thirst} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <div className="form-group">
                                <label>Is your heart beating abnormally</label>
                                <select name='rapidHeartRate' className='form-control' value={this.state.rapidHeartRate} onChange={this.onSelectChangeHandler}>
                                    <option></option>
                                    <option key="yes" value="Y">Yes</option>
                                    <option key="no" value="N">No</option>
                                </select>
                                {/* <input placeholder='tiredness' name='sellingPrice' className='form-control' value={this.state.sellingPrice} onChange={this.changeHandler}/> */}
                            </div>

                            <br/>
                            <button className='btn btn-success' type='submit'>Diagnose</button>
                            {/* <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Diagnose