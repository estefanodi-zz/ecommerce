import React  from 'react'
import Navbar from '../Navbar'
//import {Meteor} from 'meteor/meteor'
import Footer   from '../Footer'

export default class Register extends React.Component{

    constructor(){
    	super()
    	this.state = { 
             name      : '',
             lastname  : '',
             telephone : '',
             address   : '',
             email     : '',
             email2    : '',
             password  : '',
             password2 : '',
             country   : '',
             postcode  : '',
             city      : ''
    	}
    }
    
    componentWillMount(){

      Meteor.call('loggedCheck',(error,datas)=>{
        if(datas){
            this.props.history.push({pathname:'/'}) 
        }else null
      })
      
    } 

    handleChange = (e) =>  {
        this.setState({[e.target.name]:e.target.value})
    }
 
    handleSubmit = (e) => {
    	e.preventDefault()
    	
            let { password  } = this.state
            let { password2 } = this.state
            let length = password.length + password2.length
            let {  name  } = this.state
            let { email  } = this.state
            let { email2 } = this.state

            if( password === password2 && length >= 20 && email===email2){
        	    
            let profile = {
            	         name      : this.state.name,
					             lastname  : this.state.lastname,
					             telephone : this.state.telephone,
					             address   : this.state.address,
					             email     : this.state.email,
					             country   : this.state.country,
					             postcode  : this.state.postcode,
                       city      : this.state.city,
                       admin     : true
                          }
                   
	        Meteor.call('register', this.state.email, 
		                    this.state.password,
		                    profile ,(error,data) =>{
                                    
                                      if(error){
                                        console.log('register email error')
                                      }else{
                                Meteor.call('sendEmail',name,email)
                                this.props.history.push({pathname:'/login'}) 
                                this.setState({email:'',password:''})
                                      }
                            }

        		)
        		
        	

	        }else null
        
    }

	render(){
		return(

      
            <div className = 'registerContainer'>
                 
              <Navbar history = { this.props.history }/>
               
                <div className = 'registerHeader'><p>Register</p></div>
                        
                        
                        <form  
                           onChange  = {this.handleChange.bind(this)}
               		         onSubmit  = {this.handleSubmit.bind(this)}
                           className = 'registerFormArea'>

                            <div className = 'formAreaLeft'>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>
                                             Name<span className   = 'asterics'> *</span>
                                        </div>

                                        <input
                                              className = 'registerInput'
                                              name      = 'name'
                                              type      = 'text'
                                              value     =  { this.state.name }
                                              required
                                        />
                        </div>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Lastname
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'lastname'
                                              type      = 'text'
                                              value     =  { this.state.lastname }
                                              required
                                        />
                        </div>
                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Telephone number
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'telephone'
                                              type      = 'number'
                                              value     =  { this.state.telephone }
                                              required
                                        />
                        </div>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Address
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'address'
                                              type      = 'text'
                                              value     =  { this.state.address }
                                              required
                                        />
                        </div>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>City
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'city'
                                              type      = 'text'
                                              value     =  { this.state.city }
                                              required
                                        />
                        </div>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Postcode
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'postcode'
                                              type      = 'text'
                                              value     =  { this.state.postcode }
                                              required
                                        />
                        </div>
                
                </div>


                                        
                <div className = 'formAreaRight'>
                        

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Country
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'country'
                                              type      = 'text'
                                              value     =  { this.state.country }
                                              required
                                        />
                        </div>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Email
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'email'
                                              type      = 'email'
                                              value     =  { this.state.email }
                                              required
                                        />
                        </div>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Confirm email
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'email2'
                                              type      = 'email'
                                              value     =  { this.state.email2 }
                                              required
                                        />
                        </div>

                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Password
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'password'
                                              type      = 'password'
                                              value     =  { this.state.password }
                                              required
                                        />
                        </div>
                        <div className = 'registerLabel'>

                                        <div className = 'registerLabelText'>Confirm Password
                                             <span className   = 'asterics'> *</span>
                                        </div>
                                        <input
                                              className = 'registerInput'
                                              name      = 'password2'
                                              type      = 'password'
                                              value     =  { this.state.password2 }
                                              required
                                        />
                        </div>
                        <div className = 'registerLabel'>
                                       <div
                                       className = 'registerLabelText'
                                       ></div>
                                       <button className   = 'registerButton'>Register</button>
                                        
                        </div>
                        

                           </div>
            </form>
                                 
                  
               
               <Footer/>
              
           </div>
      	   
          

                   
			  )
	}
}
  
