import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';

class Confirm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    input_submit = (e) => {
        e.preventDefault();
        this.props.history.push('/Conformation')

    }
    render() {
        console.log(this.props.add.book);
        let confirm_user = this.props.add.stored_data
        let show_confirm = confirm_user.reverse().map(e => {
            return (
                <div>
                    <p class="text-danger">hey {e.first_name} Your Booking is on {e.from_data}</p>
                    <div class="card">
                        <div class="card-body">
                            <h4>Customer's Details</h4>
                            Full Name: {e.first_name}  {e.last_name}<br/>
                            Booking From Date: {e.from_data}<br/>
                            Booking To date: {e.to_date}<br/>
                    </div>
                    </div>
                </div>
            )
        })
        return (
            <div class="card col-8 m-5">
                <div class="card-body">
                   
                    {show_confirm}
                    <form onSubmit={this.input_submit}>
                        <button type="submit" class="btn btn-outline-success mt-3">Confirm Booking</button>
                    </form>
                </div>
                {/* <Link to="/Conformation" class="btn btn-outline-danger mt-3">Confirm Booking</Link> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
export default connect(mapStateToProps)(Confirm) 