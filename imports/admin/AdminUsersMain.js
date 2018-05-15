import   React      from 'react'
import { Accounts } from 'meteor/accounts-base'
import { Orders } from '../../imports/api/Orders'
import {  Meteor  } from 'meteor/meteor'

export default class AdminUsersMain extends React.Component{
    
    constructor(){
    	super()
    	this.state = { 
             search : '',
             orders : [],
             user:[{profile:{
             	              name     : '',
                              lastname : '',
                              email    : '',
                              telephone: '',
                              address  : '',
                              city     : '',
                              postcode : '',
                              country  : ''
                }}]
    	}
    }

    componentWillMount(){

      
      
    }

    componentDidMount(){

      
      Meteor.call('getUserId',(error,data) =>{
           if(error){
            console.log('error message')
           }else{
            if(data!='admin'){
              this.props.history.push('/')
            }
           }
       })
    }
    
    handleChange = (e) => {
         this.setState({search:e.target.value})
     }

     findUser = (e) => {
     	e.preventDefault()
        let { search } = this.state
        let user;
        Meteor.call('findUserByemail',search,(error,data)=>{
          if(error){
             console.log('findUserByemail error')
          }else{
            user = data;
            if( user.length>0 ){
              Tracker.autorun( ()=>{
                Meteor.subscribe('orders')
                var orders = Orders.find({'user.email':search}).fetch()
                this.setState({user,orders},()=>console.log(this.state.orders))
              })
              
            }else null
            console.log('ok')
          }
        })
             
        
    
     }

	render(){
        let text     = { color:'grey',marginLeft:'5%'}
        let findUser = {
        	
        	width   : '40%',
        	margin  : '2% 30%'
        }

		return(
                 <div className = 'adminAreaContainer'>


                    <div className = 'usersHeader'><p>Users</p></div>

                    <form 
                                onSubmit = { this.findUser.bind(this)}
                                style    = { findUser }>

                                <input   
	                                   value       = {this.state.search}
	                                   className   = 'newCategoryInput'
                                       placeholder = 'User email'
                                       type        = 'email'
	                                   onChange  = {this.handleChange.bind(this)}
	                                   />
                                <button
                                       className  = 'newCategoryButton'>Find user
                                </button> 
                    </form>

                    <div className = 'usersBody'>

                           <div className = 'orderDetailsMainSquare'>
                                  
                                  <div className = 'orderDetailsHeader'>
                                      <p>User Details</p>
                                  </div>
                                  
                                  <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Name :</span> {this.state.user[0].profile.name}
                                    </p>
    	                          </div>

                                  <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Lastname :</span> {this.state.user[0].profile.lastname}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Email :</span> {this.state.user[0].profile.email}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Telephone :</span> {this.state.user[0].profile.telephone}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Address :</span> {this.state.user[0].profile.address}
                                    </p>
    	                          </div>

                                  <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >City :</span> {this.state.user[0].profile.city}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Postcode :</span> {this.state.user[0].profile.postcode}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Country :</span> {this.state.user[0].profile.country}
                                    </p>
    	                          </div>
    	                     </div>

    	                     <div className = 'orderDetailsMainSquare'>
                                  <div className = 'orderDetailsHeader'>
                                      <p>Orders</p>
                                  </div>

                                  <div className = 'userOrdersBody'>

                                   {
                                   	this.state.orders.map( (ele,i) => {
                                        
                                   		return  <div      className = 'adminOrdersDetailsDiv'
                                   		                  key = { i }>
                                                  
			                               		        <div className = 'orderDetailsRow'>
			                                               <p><span style = {text}
			                                                >Order number :</span> {ele._id}
			                                               </p>
				                                        </div>

		    	                                        <div className = 'orderDetailsRow'>
		                                                   <p><span style = {text}
		                                                    >Date :</span> {`${ele.date.day} / ${ele.date.month}/${ele.date.year}`}
		                                                   </p>
		    	                                        </div>

		    	                                        <div className = 'orderDetailsRow'>
			                                               <p><span style = {text}
			                                                >Total :</span> {ele.total} €
			                                               </p>
				                                        </div>

                                                        <div className = 'userTable'>
                                                              <p>Product</p>
                                                              <p>Price</p>
                                                              <p>Quantity</p>

                                                        </div>
		    	                                       {
		    	                                       	ele.cart.map( (ele2,i) => {
		    	                                       		return <div 
                                                                          key       = { i }
		    	                                       		              className = 'userTableIn'>
                                                                          <p>{ele2.product}</p>
                                                                          <p>{ele2.price} €</p>
                                                                          <p>{ele2.quantity}</p>
		    	                                       		       </div>
		    	                                       	})
		    	                                       }
                                                      
    	                                        </div>
                                     
                                   	})
                                   }

                                  </div>
    	                     </div>
    	               </div>
                          
                         
                    </div>

               
			   )
	}
}
