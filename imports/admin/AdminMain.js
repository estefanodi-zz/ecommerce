import React from 'react' 
import {Meteor} from 'meteor/meteor'

export default class AdminMain extends React.Component{

     componentWillMount(){
      
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

     handleClick = (page) => {
     	this.props.history.push(page)
     }

     render(){
     	return(
               <div className = 'adminAreaContainer'>
                    <div className = 'adminAreaContainerIn'>
                        
                              
                              <div 
                                     className = 'containerInBox containerInBox1'
                                     onClick   = { this.handleClick.bind(this,'/admin/products-summary')}>
                                                  <p>Products</p>
                              </div>

                              <div 
                                     className = 'containerInBox containerInBox2'
                                     onClick   = { this.handleClick.bind(this,'/admin/category-summary')}>
                                  <p className = 'adminMainTex'>Categories</p>
                              </div>

                        
                              
                        

                              <div 
                                    className = 'containerInBox containerInBox3'
                                    onClick   = { this.handleClick.bind(this,'/admin/users-main')}>
                                 <p className = 'adminMainTex'>Users</p>
                              </div>

                              <div 
                                   className = 'containerInBox containerInBox4'
                                   onClick   = { this.handleClick.bind(this,'/admin/orders-main')}>
                                 <p className = 'adminMainTex'>Orders</p>
                              </div>
                         
                    </div>
               </div>
     		  )
     }
}