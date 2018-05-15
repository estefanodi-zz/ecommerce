import { Mongo } from 'meteor/mongo'

export const Favourites = new Mongo.Collection('favourites')

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('favourites', function() {
    return Favourites.find();
  });
}

Meteor.methods({

	addToFavourites:function(userId,productId,product,price){
        
        Favourites.insert({
        	               userId,
        	               productId,
        	               product,
        	               price
        })
    },
    removeFavourite:function(favouriteId){

    	let favourite = Favourites.remove({_id:favouriteId})
    	    return favourite
    }
})