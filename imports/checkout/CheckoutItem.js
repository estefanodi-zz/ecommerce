import React from 'react'

export default class CheckoutItem extends React.Component{
       constructor(){
       	super()
         	this.state = {
           		quantity : 1,
              total    : 0
         	}
        }
       
       componentWillMount(){
       	let { price } = this.props
        
       	this.setState({price})
       }

       handleClick = (sig) => {
       	 var {quantity} = this.state
         var {  price } = this.state
         var { total  } = this.state

		         if(sig === 'plus') {quantity += 1}
		         if(sig === 'minus'){quantity -=1}
		        this.props.updateCart(this.props.productId,quantity)
                 total = price * quantity
                 this.setState({total,quantity})
       }

       render(){
                    return ( 
                    	    <div className = 'checkoutCartDetails'>
                    	    	      <div>{this.props.product}</div>
                                  <div>{this.props.price} €</div>
                                  <div>{this.props.quantity}</div>
                                  <div>{this.props.total} €</div>
                    	    </div>
	                       )

}}

