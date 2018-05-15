import React  from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'

export default class Login extends React.Component{
  
    constructor(){
        super()
        this.state = {
          email      : '',
          password   : '',
          logged     : false,
          logout     : 'none',
          visibility : 'hidden',
          color      : '',
          border     : '',
          message    : '',
          background : ''
        }
    }
//********************************************************************************

    componentWillMount(){
      Meteor.call('loggedCheck',(error,datas)=>{
        if(datas){
            this.props.history.push({pathname:'/'}) 
        }else null
      })
    }     
    
//********************************************************************************
    
    handleChange = (e) => {
      
      this.setState({[e.target.name]:e.target.value})
    }

//********************************************************************************


//********************************************************************************
    handleSubmit = (e) =>{
         e.preventDefault()

         let {email}    = this.state
         let {password} = this.state

  Meteor.loginWithPassword( 
        {email},password,((err,data)=>{
          
              if(err){
                     this.setState({visibility:'visible',
                      color         : '#a94442',
                      border        : '2px solid #a94442',
                      message       : 'Email or password incorrect',
                      background    : '#f2dede'
                     })
                      setTimeout( ()=>{this.setState({visibility:'hidden'})},3000)
                     
              }else{
                      
                      this.setState({visibility:'visible',
                      color         : '#3c763d',
                      border        : '2px solid #3c763d',
                      message       : 'Welcome',
                      background    : '#dff0d8'
                     })

                      setTimeout( ()=>{this.props.history.push({pathname:'/'})},3000)
                      

                 // this.props.history.push({pathname:'/'})      
              }//personsearchshopping_cart
              this.setState({email:'',password:''})
        })
) 
         
    }
//******************************************************************************
    handleRegister = () => {
      
       this.props.history.push({pathname:'/register'})
    }
//******************************************************************************
    render(){
        
        let visibility = { 
                           visibility      : this.state.visibility,
                           color           : this.state.color,
                           border          : this.state.border,
                           backgroundColor : this.state.background
                         }

    return(
              <div className = 'loginContainer'>
                   <Navbar history = { this.props.history }/>

                   
                         <div className = 'loginHeader'><p
                                                        className='loginHeaderText'
                                                   >Already member?</p></div>
                         <div  style     = {visibility}
                               className = 'alert'>{this.state.message}</div>
                         
                         
                         
                            <form 
                               onChange  = {this.handleChange.bind(this)}
                             onSubmit  = {this.handleSubmit.bind(this)}
                             className = 'loginFormArea'

                             > 
                               <div className='logLabCont'> 

                                 <div
                                       className   = 'loginLabel'
                                 >Email <span
                                       className   = 'asterics'
                                        >*</span></div>
                                 <input
                                       className   = 'loginInput'
                                       name        = 'email'
                                       value       = { this.state.email }
                                       type        = 'email'
                                       required
                                 />
                               </div>

                               <div className='logLabCont'> 

                                 <div
                                       className   = 'loginLabel'
                                 >Password <span

                                       className   = 'asterics'
                                        >*</span>

                                 </div>
                                 <input
                                       className   = 'loginInput'
                                       value       = { this.state.password }
                                       name        = 'password'
                                       type        = 'password'
                                       required
                                 />

                               </div>
                               
                               <button
                                     className   = 'login_button'
                               >Login</button>
                           </form>
                           <div
                                className = 'notMemberYet'
                           ><h2
                                onClick = {this.handleRegister.bind(this)}
                           >Not member yet?</h2>
                            
                           </div>
                         
                   
                   <Footer/>
              </div>
                 
                 
                    

        )
  }
}