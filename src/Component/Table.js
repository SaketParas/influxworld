import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            final_data: [],
            search:'',
        }
    }


    handleSearch=(e)=>{
        this.setState({
            search:e.target.value
        })
    }

    render() {
       
        //  // ****************search**
        let user=this.props.add.stored_data;
        let search=this.state.search.trim().toLowerCase();
        if(search.length > 0 ){
            user=user.filter(function(user){
                // return user.company.toLowerCase().match(search);
                if(user.model || user.type){
                    return (user.model || user.type).toLowerCase().match(search);
                }
            })
        }
         // ****************search**
        let show_user =  user.reverse().map(e => {
            return(
                <tr>
                    <th scope="row">{e.model}</th>
                    {/* <td><Link to={`/edit/${e.id}`}>{e.model}</Link></td> */}
                    <td>{e.type}</td>
                    <td>{e.seat}</td>
                    <td>{e.color}</td>
                    {/* <td>Book Now</td> */}
                    <td><Link to={`/Book/${e.id}`}>Book</Link></td>
                    
                </tr>
            )
        })
        return (
            <div>
                <div className="col-4 mt-3 p-3 mb-2 bg-primary text-white">
                <input class="form-control" name="serach" value={this.state.search} type="text" placeholder="Search By Model Name" onChange={this.handleSearch} />
                </div>
                <div class="card text-center mt-2">
                    <div class="card-header">
                        <h3 class="text-primary">Vehicle Details</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Model Name</th>
                                    <th scope="col">Vehicle Type</th>
                                    <th scope="col">Seats</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Book Now</th>
                                </tr>
                            </thead>
                            <tbody>
                               {show_user}
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-muted">
                     
                        <Link to="/Add" class="btn btn-outline-danger ml-5">Add Vehicle</Link>
                        {/* <div className="mt-2">
                        Sales sort by : <button class="btn btn-outline-success" onClick={this.on_change}> High</button>
                        <button class="btn btn-outline-success ml-2" onClick={this.on_change_desen}>Low</button>
                        <Link className="btn btn-success ml-3" onClick={this.handleSales}>Total sales { this.state.total}</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}

export default connect(mapStateToProps)(Table) 