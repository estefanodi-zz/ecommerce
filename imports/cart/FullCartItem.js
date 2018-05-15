import React          from 'react'


export default class FullCartItem extends React.Component{
      
      componentWillMount(){
        debugger
      }
       callChangeQuantity = (productId,sign) => {
         
       	 this.props.changeQuantity(productId,sign)

       }

       render(){

    

                    return ( <div
                                className = 'itemContainer'
                            >

                                <img 
                                    className = 'cartImage'
                                    src    = { this.props.product.picture}
                                />

                                <div className = 'cartDetails'>
                                      
                                    <div className = 'cartDetailsHeader'>

                                           <div className = 'table1'><p>{this.props.product.product}</p></div>

                                           <div className = 'table2'>
			                                       <p>Quantity</p>
			                                       <div className = 'quantity'>
                                                     <div className = 'minus'
                                                          onClick = { this.callChangeQuantity.bind(this,this.props.product._id,'-')}
                                                     ><p>-</p></div>
                                                     <div className = ''>
                                                       <div className = 'display'><p>{this.props.product.quantity}</p></div>
                                                     </div>
                                                     <div className = 'plus'
                                                          onClick = { this.callChangeQuantity.bind(this,this.props.product._id,'+')}
                                                     ><p>+</p></div>
			                                       </div>
                                           </div>

                                           <div className = 'table3'>
			                                       <p className= 'table3-1'>Price</p>
			                                       <p className= 'table3-2'>€ {this.props.product.total}</p>
                                           </div>

                                    </div>

                                    <div className = 'description'>{this.props.product.description}</div>

                                    <div 
                                        onClick   = { ()=> this.props.removeFromCart(this.props.productId)}
                                        className = 'remove'>
                                        Remove item
                                    </div>
                                </div>


                            </div>
	                       )

}}

