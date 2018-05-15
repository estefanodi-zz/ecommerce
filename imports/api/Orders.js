import { Mongo } from 'meteor/mongo'

export const Orders = new Mongo.Collection('orders')

import { Products } from './Products'

if (Meteor.isServer) { 
    Meteor.publish('orders', function() {
        let userId = Meteor.userId()
         if(userId){
            return Orders.find();
         }else null
           
    });
    Meteor.publish('ordersAdmin', function() {
        let user = Meteor.user()
        if( user.profile.admin===true){
            return Orders.find();
        }else null
           
    });


}

Meteor.methods({

	
    createOrder:function(ISODate,total,date,cart,email,user){
        let confirm =  Orders.insert({ISODate,total,date,cart,email,user})
            return confirm
    },
    updateQuantities:function(quantities){

         quantities.map( (ele,i) => {
         	var x = Products.findOne({_id:ele.productId})
         	var y = x.quantity - ele.quantity
            Products.update({_id:ele.productId},{$set:{quantity:y}})  
         }) 
    }
    
}) 