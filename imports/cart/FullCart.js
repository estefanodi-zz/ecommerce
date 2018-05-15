import React          from 'react'
import Navbar         from '../Navbar'
import FullCartList   from './FullCartList'
import { Cart }       from '../api/Cart.js'
import CalculateTotal from './CalculateTotal'
import Footer         from '../Footer'


export default class FullCart extends React.Component{

    constructor(){
    	super()
    	this.changeQuantity = this.changeQuantity.bind(this)
    	this.updateCart     = this.updateCart.bind(this)
    	this.removeFromCart = this.removeFromCart.bind(this)
    	this.state          = {}
    }
//*************************************************************************************
    componentWillMount(){

    	 Tracker.autorun( () =>{
         let cart = Cart.find({}).fetch()
         let total = CalculateTotal(Cart)
         this.setState({cart,total})
              if( cart.length < 1 ){
                   this.props.history.push({
    		                     pathname : '/emptycart' 
                    })
              }else null
         })
           
    }
//*************************************************************************************

    changeQuantity = (productId,sign) => {
            var quantity = Cart.findOne({_id:productId}).quantity
            var price    = Cart.findOne({_id:productId}).price
            var total    = Cart.findOne({_id:productId}).total 
            
            if( sign === '+'){ quantity+=1}
            if( sign === '-' && quantity!=1){ quantity-=1 }
                      
                   total=price*quantity
            Cart.update({_id:productId},{$set:{quantity,total}})
                 
    }
//**************************************************************************************
    updateCart = (productId,quantity) => {

        Cart.update({_id:productId},{$set:{quantity:quantity}})
    }
//**************************************************************************************
    removeFromCart = (productId) => {
    	       
         Cart.remove({_id:productId})
    }

    sendEmail = () => {
    	Meteor.call('sendEmail',
    		(err,resp) => {
    			if(err){
    				console.log('error')
    			}else{
    				debugger
    			}
    		})
    }
//**************************************************************************************
	render(){
		return(
               <div className = 'fullCartContainer'>
                    <Navbar
                        history = {this.props.history}
                    />
                       
                        

		                    <div className = 'fullCartHeader'>
		                          <div className='yCart'>Your Cart</div>
		                          
		                          <div><button className = 'still_button'
		                                  onClick   = { ()=>this.props.history.push({pathname:'/catalogue'})}
		                          >Shop</button></div>

		                          <div><button className = 'checkout_button'
                                          onClick = { ()=>this.props.history.push({
                                          	                                 pathname:'/checkout',
                                                                             state   : { total: this.state.total }                                            
                                                    })}
		                          >Checkout</button></div>

		                          <div    className = 'total'>
                                          
                                         Total € {CalculateTotal(Cart)}
		                          </div>
		                    </div>





		                    <div className = 'fullCart'>
		                       
		                       <FullCartList
                                    cart           = { this.state.cart     }
                                    removeFromCart = { this.removeFromCart }
                                    updateCart     = { this.updateCart     }
                                    changeQuantity = { this.changeQuantity }
                                    
		                       />  	
		                    
		                          
		                          

		                      
		                    </div>
		                  
		                  <Footer/>
               </div>
			  )
	}
}