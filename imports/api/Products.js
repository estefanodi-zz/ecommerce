import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check';

export const Products = new Mongo.Collection('products')


if (Meteor.isServer) {

  Meteor.publish('productsAdmin', function() {
    let user = Meteor.user()
    if( user.profile.admin===true){
        return Products.find();
    }else null
    
  });
  Meteor.publish('products', function() {
    
        return Products.find();
    
  });
}

Meteor.methods({
       

    addProduct:function(product,price,quantity,category,categoryId,description,details){
	
        Products.insert({
      	               product,
      	               price,
      	               quantity,
      	               category,
      	               categoryId,
      	               description,
      	               details
        })
           
    },
    removeProduct:function(productId){
    	
        let remove = Products.remove({_id:productId})
        
    },
    updateProduct:function(productId,product,price,quantity,description){

        Products.update({_id:productId},{$set:{
        	                                   productId,
        	                                   product,
        	                                   price,
        	                                   quantity}
        })
    },
    addAllProducts:function(item){
        
        Products.insert(item)
        

    }
})