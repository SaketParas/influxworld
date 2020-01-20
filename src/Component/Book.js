import React, { Component } from 'react';
import { connect } from 'react-redux';
import {booking_data} from './../Redux/Action';

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            from_data: '',
            to_data: '',
        }
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    input_submit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000) * 1000);
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            from_data: this.state.from_data,
            to_data: this.state.to_data,
            id_book: random_number
        }
        console.log(data);
        this.props.book_data(data);
        this.props.history.push('/Confirm')
    }

    render() {
        console.log(this.props.add.stored_data);
        
        // let user=this.props.add.stored_data;
        // let show_book = user.map(e => {
        //     return(
        //         <h3>{e.model}</h3>
        //     )
        // })
        return (
           
            <React.Fragment>
                <div class="card col-8 m-5 " >
                    <div class="card-body">
                    <h4>Booking Page</h4>
                    {/* {show_book} */}
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    First name :<input type="text" class="form-control" placeholder="First name" name="first_name" value={this.state.first_name} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    Last name :<input type="text" class="form-control" placeholder="Last name" name="last_name" value={this.state.last_name} onChange={this.input_change} />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    Date From :<input type="date" class="form-control" placeholder=" Date From" name="from_data" value={this.state.from_data} onChange={this.input_change} />
                                </div>
                                <div class="col">
                                    Date To :<input type="date" class="form-control" placeholder="Date To" name="to_data" value={this.state.to_data} onChange={this.input_change} />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline-success mt-3">Proceed</button>
                        </form>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        book_data:(data) => dispatch(booking_data(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Book) 