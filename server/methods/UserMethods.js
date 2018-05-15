import  { Meteor }    from 'meteor/meteor'
import { Accounts }   from 'meteor/accounts-base'
import   { Email }    from 'meteor/email'
import { Subscribed } from '../../imports/api/Subscribed'
import { Orders }     from '../../imports/api/Orders'




Meteor.methods({
    
    checkFav:function(){
        let id = Meteor.userId()
          return id
    },
    loggedCheck:function(){
        let id = Meteor.userId()
           if(id){
             return 'logged'
           }else null
    },
    loggedCheck2:function(){
        let id = Meteor.user()
           if(id){
             return id
           }else null
    },
    getUserId:function(){
        let id = Meteor.userId()
            if(id==="4xCAD7uxcsoMpqPha"){
                return 'admin'
            }else null
       
    },
	register:function(email,password,profile){
					             
        let account = Accounts.createUser({email,password,profile})
            return account
              
    },
    findUser:function(email){

        let find = Accounts.findUserByEmail(email)
            return find
    },
    findUserByemail:function(search){
        
        let user = Meteor.users.find({ "emails.address" : search}).fetch()
            return user
    },
    addNewsletter:function(email){
    	Subscribed.insert({email})
    	
    }
    
})

