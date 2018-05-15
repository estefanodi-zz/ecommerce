// import {  Meteor  } from 'meteor/meteor'
// import {  Orders  } from '../../imports/api/Orders'
// import { Products } from '../../imports/api/Products'

// Meteor.methods({

	
//     createOrder:function(ISODate,total,date,cart,email,user){
//         let confirm =  Orders.insert({ISODate,total,date,cart,email,user})
//             return confirm
//     },
//     updateQuantities:function(quantities){

//          quantities.map( (ele,i) => {
//          	var x = Products.findOne({_id:ele.productId})
//          	var y = x.quantity - ele.quantity
//             Products.update({_id:ele.productId},{$set:{quantity:y}})  
//          }) 
//     }
    
// }) 