import React               from 'react'
import StripeCheckout      from 'react-stripe-checkout';

import CheckoutOk          from './CheckoutOk'
import CheckoutErr         from './CheckoutErr'

export default class StripeButton extends React.Component{

    constructor(){
    	super()
    	this.handleError   = this.handleError.bind(this)
    	this.handleSuccess = this.handleSuccess.bind(this)
    	this.onToken       = this.onToken.bind(this)
    	this.state         = { }
    }
    
   

//******************************************************************************

    handleError = (data) => {
        
          this.props.history.push({pathname :'/checkout-error'})                       
   
    }

//*****************************************************************************

    handleSuccess = (data) => {
        this.props.finishOrder()
    	
    }

//****************************************************************************

    onToken =  (token) => {
    	   //debugger
          Meteor.call(
              'StripeChargeMethod',
              token, 
              this.props.amount,
              (err,data)=>{ 
              	//debugger
                 if(err){
                 //as always place a debugger here so that you can see what the error is
                    this.handleError(err)
                 }else if(data){
                 //debugger to check the data
                    if(data.status == "succeeded"){
                      this.handleSuccess(data)
                }else if(data.type =='StripeInvalidRequestError'){
                      this.handleError(data)
                 }
                }
              }
          )
    
      }


      render() {
    
        return (
          <div>
          <StripeCheckout
            
            token       =  {this.onToken}
            stripeKey   =  "pk_test_CYHcCfmEiGS3v7PX3pAF7FXl"
            amount      =  {this.props.amount}
            //email       =  {this.props.email}
          />
          </div>
        )
      }
    }
