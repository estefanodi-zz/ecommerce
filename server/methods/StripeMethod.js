import  { Meteor }  from 'meteor/meteor'

var Stripe = StripeAPI('sk_test_0QAashxJqSDyhSfOBmaT73iC');

var Future = Npm.require('fibers/future');



var charge = (token, amount)=>{
  var future = new Future;
  Stripe.charges.create({
      source: token.id,
      amount: amount,
      currency: 'eur'
      //receipt_email: //you can pass it here if you wish,
  },(error,results)=>{
    if(error) {
      future.return(error)
    }else if(results) {
      //here you could run a function for example in case of success
      future.return(results)
    }
  })
    return future.wait();
}

Meteor.methods({
  StripeChargeMethod: function(token, amount){
    try{
      var data = charge(token, amount)
      console.log('***********************success***********************?')
      return data
    }catch(error){
      console.log('***********************error***********************?')
      return error
    }
  }
})