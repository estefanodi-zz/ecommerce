import React        from 'react'
import CheckoutItem from './CheckoutItem'

export default class CheckoutList extends React.Component{
	render(){
		return(<div style = {{width:'100%',
                              display:'grid',
                              gridTemplateRows:'10% 90%'
                            }}>
                        <div style = {{
                                       display             : 'grid',
                                       gridTemplateColumns : ' 2fr 1fr 1fr 1fr',
                                       fontSize            : '1.6em',
                                       textAlign           : 'center',
                                       alignSelf           : 'center',
                                       height              : '100%'
                                   }}>
                            <div style = {{textDecoration:'underline grey'}}>Product</div>
                            <div style = {{textDecoration:'underline grey'}}>Price</div>
                            <div style = {{textDecoration:'underline grey'}}>Quantity</div>
                            <div style = {{textDecoration:'underline grey'}}>Total</div>
                        </div>

		          <div>    {
                      this.props.cart.map( (ele,i) => {
                                       
          	                       	return  <CheckoutItem
                                                 key      = { i }
                                                 product  = { ele.product  }
                                                 price    = { ele.price    }
                                                 quantity = { ele.quantity }
                                                 total    = { ele.total    }
                                            />
                      })


		              }</div>

		              </div>
               
			   )
	}
}