import React, { Component } from 'react';
import {connect} from 'react-redux';
import {company_data} from './../Redux/Action';
import { Link} from 'react-router-dom';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model:'',
            type:'',
            seat:'',
            color:'',
        }
    }
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000)*1000);
        let data = {
            model:this.state.model,
            type:this.state.type,
            seat:this.state.seat,
            color:this.state.color,
            id: random_number
        }
        console.log(data);
        this.props.form_data(data);
       
    }
    
    render() {
        return (
            <React.Fragment>
                <div class="card mt-5">
                    <div class="card-header">
                        <h5 class="text-primary">Enter Vehicle Details</h5>
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    Model Name :<input type="text" class="form-control" placeholder="Model Name" name="model" value={this.state.model} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                    Vehicle Type :<input type="text" class="form-control" placeholder=" Vehicle Type" name="type" value={this.state.type} onChange={this.input_change}/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    No. Of Seats:<input type="text" class="form-control" placeholder="No. Of Seat" name="seat" value={this.state.seat} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                   Car Color :<input type="text" class="form-control" placeholder="Car Color" name="color" value={this.state.color} onChange={this.input_change}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline-success mt-3">Add Details</button>
                        </form>
                    </div>
                    
                    <div class="card-footer text-muted">
                    <Link to="/Table" class="btn btn-outline-danger mt-3">View All Vehicle</Link>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        form_data:(data) => dispatch(company_data(data))
    }
}
export default connect(null, mapDispatchToProps)(Add) 