import React, { Component } from 'react';
import axios from 'axios';

export default class Stocks extends Component {
	constructor(props){
		super(props)

		this.state = {
			allOrderStatus: []
		}
		this.allOrderStatus = this.allOrderStatus.bind(this)
	}

	allOrderStatus(){
		axios({
			url: 'http://localhost:3000/orderstatuses',
			method: 'get'
		}).then(response => {
			console.log('allOrderStatus: ', response);
			this.setState({ allOrderStatus: response.data });
		});
	}

	componentDidMount(){
		this.allOrderStatus();
	}

	render(){

		const allOrderStatus = this.state.allOrderStatus.map((el,key) => {
			console.log(el)
			return (
				<tr key={key}>
					<td>{el.ordernumber}</td>
					<td>{el.orderdate}</td>
					<td>${el.total}.00</td>
					<td>{el.status}</td>
					<td>{el.note}</td>
					<td>{el.seller_id}</td>
				</tr>
			)
		})

		return (
			<section id="orderstatus-page-section">
    			<div className="allorderstatus-table-div">
    				<table className="allorderstatus-table">
    					<thead>
    						<tr>
	    						<th>Order Number</th>
	    						<th>Order Date</th>
	    						<th>TOTAL</th>
	    						<th>STATUS</th>
	    						<th>NOTE</th>
	    						<th>USER ID</th>
	    					</tr>
    					</thead>
    					<tbody>
    						{allOrderStatus}
    					</tbody>
    				</table>
    			</div>
			</section>
		)
	}
}