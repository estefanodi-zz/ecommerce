import React from 'react'

export default class SecondRow extends React.Component{
	
	constructor(){
		super()
		this.state = { 
                      email : 'Enter your email'
	                 }
	}
    

    handleChange = (e) => {
          this.setState({email:e.target.value})
    }

    handleSubmit = (e) => {
    	e.preventDefault()
    	 
         this.setState({email:'Enter your email'})
         Meteor.call('addNewsletter',this.state.email, (err,ok) => {
         	
         	
            
         })
         
    }

	render(){

		let subscribe = {
			width              : '70%',
			margin             : '0 15%',
			display            : 'grid',
			gridTemplateColumns: '1fr 1fr'
		}

		return(
               <div className = 'secondRow'>
                  
               	   <p className = 'subscribe'>Subscribe Our Newsletter</p>

               	   <form 
                          onSubmit = {this.handleSubmit.bind(this)} 
               	          style    = {subscribe}>
		               	   <input  
		               	           onChange    = {this.handleChange.bind(this)}
		                                
		               	           className   = 'subs_i_n_p_u_t'
		                           type        = 'email'
		                           placeholder = { this.state.email }
		                           required
		               	   />
		               	   <button className = 'subs_b_u_t_t_o_n'>Subscribe</button>
               	   	 
               	   </form>

               </div>
			  )
	}
}