import { Mongo } from 'meteor/mongo'

export const Categories = new Mongo.Collection('categories')

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('categories', function() {
    return Categories.find();
  });
}


Meteor.methods({

    
    addCategory:function(category){
	
        Categories.insert({category})
          
    },
    removeCategory:function(categoryId){
        
        Categories.remove({_id:categoryId})
        Products.remove({categoryId:categoryId})
    },
    updateCategory:function(categoryId,newCategory,category){
                   
		Categories.update({_id:categoryId},{$set:{category:newCategory}})
		Products.update({categoryId:categoryId},{$set:{category:newCategory}})
    }

})