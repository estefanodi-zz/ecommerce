import React        from 'react'
import FullCartItem from './FullCartItem'

export default class FullCartList extends React.Component{
render(){
    return(<div>
	   {
	      this.props.cart.map( (ele,i) => {
		return  <FullCartItem 
			     className = 'fullCartList'
			     key       = { i }
			     product   = { ele }
			     removeFromCart = { this.props.removeFromCart }
			     updateCart     = { this.props.updateCart }
			     productId      = { ele._id }
			     changeQuantity = { this.props.changeQuantity }
			 />
	      })
		}
	   </div>
    )
  }
}
