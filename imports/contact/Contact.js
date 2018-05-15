import React    from 'react'
import Navbar   from '../Navbar.js'
import {Meteor} from 'meteor/meteor'
import Footer   from '../Footer'

export default class Contact extends React.Component{
    constructor(){
    	super()
    	this.state = { 
                   name      : '',
                   email     : '',
                   telephone : '',
                   message   : ''
        }
    }
    
    

    handleChange = (e) =>  {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
    	e.preventDefault()
    	let {   name    } = this.state
    	let {   email   } = this.state
    	let { telephone } = this.state
    	let { message   } = this.state
    	
    	

    	Meteor.call('contactUsEmail',name,email,telephone,message, (err,ok) => {
    		   if(err){
    		   	console.log('contactUsEmail error')
    		   }else{
    		   	this.props.history.push({pathname:'/'}) 
    		   }
    	})
    }


	render(){
		return(
                <div className = 'contactContainer'>
            <Navbar history = { this.props.history }/>

            
                    <div className = 'contactHeader'><p
                                                     style = {{fontSize:'3em'}}
                                                    >Contact</p></div>

                    
                     <form        onChange    = {this.handleChange.bind(this)}
                                  onSubmit    = {this.handleSubmit.bind(this)}
                                  className   = 'contactFormArea'>

                           <input className   = 'contactInput'
                                  placeholder = 'Name'
                                  type        = 'text'
                                  name        = 'name'
                                  required
                           />
                           <input className   = 'contactInput'
                                  placeholder = 'Email'
                                  type        = 'email'
                                  name        = 'email'
                                  required
                           />
                           <input className   = 'contactInput'
                                  placeholder = 'Phone number'
                                  type        = 'number'
                                  name        = 'telephone'
                                  required
                           />
                       <textarea className   = 'textAreaContact'
                                 name        = 'message'
                       >message</textarea>
                       <button   className = 'contactButton'>Send</button>
                     </form>
                   
            	
            <Footer/>
            </div>	
			  )
	}
}