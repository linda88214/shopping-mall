import React, { Component } from 'react';
import axios from 'axios'

export default class NewBuyer extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            address: '',
            phonenumber: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios('http://localhost:3000/buyers', {
            method: "POST",
            data: this.state
        }).then(resp => {
            console.log("posted?")
        })
    }

	render(){
		return (
			<section id="newbuyer-page-section">
        			<form onSubmit={this.handleSubmit} className="newbuyer-form">
                        <table>
                            <tbody>
                            <tr>
        					<td><input type="text" name="name" onChange={this.handleChange} value={this.state.name} /></td>
                            
        					<td><input type="text" name="email" onChange={this.handleChange} value={this.state.email} /></td>
                            
        					<td><input type="text" name="address" onChange={this.handleChange} value={this.state.address} /></td>
                            
        					<td><input type="text" name="phonenumber" onChange={this.handleChange} value={this.state.phonenumber} /></td>
                            </tr>
                            </tbody>
                        </table>
        				<button type="submit" value="Submit" className="create-stock-button">CREATE</button>
        			</form>
			</section>
		)
	}
}
