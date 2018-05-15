import React               from 'react'
import { Meteor }          from 'meteor/meteor'
import Navbar              from '../Navbar'
import Footer              from '../Footer'
import { Cart }            from '../api/Cart' 
import { Orders }          from '../api/Orders' 
import { Products }        from '../api/Products'   
import CheckoutList        from './CheckoutList'
import StripeButton        from './StripeButton'
import DateFunction        from '../DateFunction'
import UpdateQuantities    from './UpdateQuantities'
import CalculateTotal      from '../CalculateTotal'


export default class Checkout extends React.Component{
    
    constructor(){
    	super()
    	this.loginCheck  = this.loginCheck.bind(this)
    	this.finishOrder = this.finishOrder.bind(this)
    	
    	this.state = { 
                      name     : '',
                      lastname : '',
                      telephone: '',
                      address  : '',
                      city     : '',
                      country  : '',
                      postcode : '',
                      email    : '',
                      stripe   : false,
                      display  : 'none'

    	}
    }

    componentWillMount(){
    	this.loginCheck()
        let cart  = Cart.find({}).fetch()
        let total = this.props.location.state.total
        //let date  = DateFunction() 
        let date  = { "day" : 26, "month" : 9, "year" : 2015 }
            this.setState({cart,total,date})
             
    }
//**************************************************************************
    loginCheck = () => {

       Meteor.call('loggedCheck2',(error,data)=>{
          if(error){
            console.log('loggedCheck2 error')
          }else{
            let {profile} = data
            this.setState({...profile})
          }
       })
    } 
//*************************************************************************
   

    finishOrder = () => {
    	
        var { date  } = this.state
        var { total } = this.state
        var { cart  } = this.state
        var ISODate   = new Date().toISOString()
        //var ISODate   = "2015-09-26T10:48:46.527Z"

        var {   name    } = this.state
        var { lastname  } = this.state
        var {  address  } = this.state
        var {   email   } = this.state
        var {  country  } = this.state
        var {  postcode } = this.state
        var {    city   } = this.state
        var { telephone } = this.state
        var {   cart    } = this.state
        var {  total    } = this.state
               
        var user = { name,lastname,address,email,country,postcode,city,telephone}
                           
                          
        Meteor.call('createOrder', 
           ISODate,
	       this.state.total,
	       this.state.date,
	       this.state.cart,
	       this.state.email,
	       user, (err,confirm) => {
        	              
        	        if ( err ) {
        	        	     console.log('create order error')
        	        	     
        	        }else{   
        	        	     let number = confirm
                             this.props.history.push({
    		                                         pathname :'/checkout-confirm',
    		                                         state    : {number} 
    		                     }) 
        	        	
                            
        	    Meteor.call('sendOrderEmail',name,email,confirm,cart,total, (err,confirm) => {
                             
                         if ( err ) {
        	        	     console.log('send order email error')
        	               }else{
        	               	
        	               	 let quantities = UpdateQuantities(this.state.cart)
        	               	 
        	               	 Meteor.call('updateQuantities',quantities)
        	               	 
                             Cart.remove({})
        	               }
        	        	})
        	        }
        })

        
    	
    }

//*************************************************************************
    handleChange = (e) =>  {
        this.setState({[value]:e.target.value})
    }

    handleSubmit = (e) => {
       e.preventDefault()
         this.setState({display:'block'})
    }

	render(){
        
        let inputContainer = {
        	width  : '100%',
        	height : '80%',
        	backgroundColor : 'transparent'
        }

       

        let stripeStyle = {
        	display : this.state.display
        }

        
		return(
               <div className = 'checkoutContainer'>

               	    <Navbar history = {this.props.history}/>
                    

                    <div className = 'mainCheckout'>
                        

                          <div className = 'mainCheckoutLeft'>
                               
                               

                               <form       onSubmit  = { this.handleSubmit.bind(this) }
                                           
                                           className = 'checkoutForm'>

	                              

                                        <div className = 'checkoutLabel'>
                                             <label className = 'checkoutText'>First Name
                                             <span className   = 'asterics'> *</span>
                                             </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                    className   = 'inputPlaceColor'
                                                        placeholder = { this.state.name }
		                                                    className='checkoutInput'
                                                        type        = 'text'
                                                        //name        = { this.state.name }
                                                        onChange    = { this.handleChange.bind(this) }
                                                        value       = { this.state.name }
                                                        required
		                                          />
		                                      </div>
		                                </div>

                                      <div className = 'checkoutLabel'>
                                      <label className = 'checkoutText'>Last Name
                                      <span className   = 'asterics'> *</span>
                                      </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                className   = 'inputPlaceColor'
                                                        placeholder = { this.state.lastname }
		                                                    className='checkoutInput'
                                                        type = 'text'
                                                        //name = { this.state.surname }
                                                        onChange  = { this.handleChange.bind(this) }
                                                        value = { this.state.lastname}
                                                        required
		                                          />
		                                      </div>

                                      </div>

                                      <div className = 'checkoutLabel'>
                                      <label className = 'checkoutText'>Telephone Number
                                      <span className   = 'asterics'> *</span>
                                      </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                    className   = 'inputPlaceColor'
                                                        placeholder = { this.state.telephone }
		                                                    className='checkoutInput'
                                                        type        = 'number'
                                                        //name = { this.state.telephone }
                                                        onChange  = { this.handleChange.bind(this) }
                                                        value = { this.state.telephone }
                                                        required
		                                          />
		                                      </div>

                                      </div>

                                      <div className = 'checkoutLabel'>
                                      <label className = 'checkoutText'>Email
                                      <span className   = 'asterics'> *</span>
                                      </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                    className   = 'inputPlaceColor'
                                                        placeholder = { this.state.email }
		                                                    className='checkoutInput'
                                                        type        = 'email'
                                                        //name = { this.state.email }
                                                        onChange    = { this.handleChange.bind(this) }
                                                        value       = { this.state.email }
                                                        required
		                                          />
		                                      </div>

                                      </div>

                                      <div className = 'checkoutLabel'>
                                      <label className = 'checkoutText'>Address
                                      <span className   = 'asterics'> *</span>
                                      </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                    className   = 'inputPlaceColor'
                                                        placeholder = { this.state.address }
		                                                    className='checkoutInput'
                                                        type        = 'text'
                                                        //name = { this.state.address }
                                                        onChange    = { this.handleChange.bind(this) }
                                                        value       = { this.state.address }
                                                        required
		                                          />
		                                      </div>

                                      </div>

                                      <div className = 'checkoutLabel'>
                                      <label className = 'checkoutText'>Country
                                      <span className   = 'asterics'> *</span>
                                      </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                    className   = 'inputPlaceColor'
                                                        placeholder = { this.state.country }
		                                                    className='checkoutInput'
                                                        type        = 'text'
                                                        //name = { this.state.country }
                                                        onChange    = { this.handleChange.bind(this) }
                                                        value       = { this.state.country }
                                                        required
		                                          />
		                                      </div>

                                      </div>

                                      <div className = 'checkoutLabel'>
                                      <label className = 'checkoutText'>City
                                      <span className   = 'asterics'> *</span>
                                      </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                    className   = 'inputPlaceColor'
                                                        placeholder = { this.state.city }
		                                                    className='checkoutInput'
                                                        type        = 'text'
                                                        //name = { this.state.city }
                                                        onChange    = { this.handleChange.bind(this) }
                                                        value       = { this.state.city }
                                                        required
		                                          />
		                                      </div>

                                      </div>

                                      <div className = 'checkoutLabel'>
                                      <label className = 'checkoutText'>Postcode
                                      <span className   = 'asterics'> *</span>
                                      </label>

		                                      <div style = {inputContainer}>
		                                          <input
		                                                className   = 'inputPlaceColor'
                                                    placeholder = { this.state.postcode }
		                                                className='checkoutInput'
                                                    type        = 'text'
                                                        //name = { this.state.postcode }
                                                    onChange    = { this.handleChange.bind(this) }
                                                    value       = { this.state.postcode }
                                                    required
		                                          />
		                                      </div>

                                      </div>
                                      <button 
                                              className = 'checkSubmButt'
                                      >Submit</button>
                               </form>
                          </div>


                          <div className = 'mainCheckoutRight'>

                                <div className = 'checkoutHeaderRight'>
	                                  <p>Order Details</p>
	                                  
	                                  <p>Total : {CalculateTotal(Cart)}  €</p>
	                                 
	                            </div>

                                <CheckoutList
                                      cart = {this.state.cart}
                                />
                                <div className = 'checkoutFooter'>
                                     <div style = { stripeStyle }>
                                         <StripeButton
                                            
                                            amount      = { this.state.total   }
                                            history     = { this.props.history }
                                            finishOrder = { this.finishOrder   }
                                            stripe      = { this.state.stripe  }
                                         />
                                     </div>

                                                                     </div>
                          </div>
                        </div>
                   

                    <Footer/>
               </div>
			  )
	}
}




































































