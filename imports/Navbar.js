import React     from 'react'
import { Link }  from 'react-router-dom'
import { Route,BrowserRouter } from 'react-router-dom'
import { Cart } from '../imports/api/Cart'
import NavBarNPM from 'reactjs-navigation'


export default class Navbar extends React.Component{
	
   constructor(){
   	super()
   	this.state = {
           login    : false,
   	   logout   : 'none',
   	   cart     : true,
           active   : false,
           dropVisi : 'hidden',
           transform:'rotate(100deg)',
           logged   : true,
           open     : false
   }}
//********************************************************************************
componentWillMount(){
   Tracker.autorun( () =>{
      let cart   = Cart.find({}).fetch()
      this.cartCheck.bind(this)
      let logout
      let login

           Meteor.call('loggedCheck',(error,data)=>{
               if( data === 'logged'){
                    login  = true
                    logout = 'inline-block'
             }else{
                    logout = 'none'

             }
             this.setState({cart,logout,login})
           })
           })
}
//********************************************************************************

handleClick (){
	if( this.state.open === false){
	 this.setState({
			transform : 'rotate(-100deg)',
			open      : true,
			dropVisi : 'visible'
		    })
	}else{
	 this.setState({
			transform : 'rotate(100deg)',
			open      : false,
			dropVisi  : 'hidden'
		    })
	}
}

loginCheck = () => {
     if(this.state.login===true){
	this.props.history.push({
	       pathname:'/user/page'
	})
     }else{
	this.props.history.push({
	       pathname:'/login'
	})
     }
}

cartCheck = () => {

let length = this.state.cart.length
       if(length >0 ){
	this.props.history.push({pathname:'/fullcart'})
       }else{
	this.props.history.push({pathname:'/emptycart'})
       }
}
//*********************************************************************************


logout = () => {
  Meteor.logout( (err,data) => {
  if(err){
	console.log(err)
  }else{
	this.props.history.push({pathname:'/login'})
	this.setState({logout:'none',login:false})
  }
  })
}

//*********************************************************************************    
	

  
render(){

    let logout = {
	display    :  this.state.logout,
	fontSize   : '0.8em',
	color      : 'white'
    }
    let dropHamb = {
         visibility:this.state.dropVisi
    }
    let burger = {
      each: {
        background:'white'
      },
      main:{
        transform:this.state.transform,
        transition:'.3s ease all'
      }
    }
		
		return(
             <div  className = 'barraTop'>
               
                   <div className = 'barraTopLeft'>
                         <div style={dropHamb} className='dropHamb'>
                            
                            <Link className = 'linkColor2' to ='/'>Home</Link>
                            <Link className = 'linkColor2' to ='/about'>About</Link>
                            <Link className = 'linkColor2' to ='/catalogue'>Catalogue</Link>
                            <Link className = 'linkColor2' to ='/about'>User</Link>
                            <Link className = 'linkColor2' to ='/catalogue'>Cart</Link>
                            
                        </div>

                        <div className= "hamburguer">
                          <div
                          style    = {burger.main} 
                          onClick  = {this.handleClick.bind(this)} 
                          className= "mainBurger">
                            <div 
                              style={burger.each}
                              className="burger"></div>
                            <div 
                              style={burger.each}
                              className="burger"></div>
                            <div 
                              style={burger.each}
                              className="burger"></div>
                        </div>
                        </div>
                   </div>
                   
                   <div className = 'barraTopCenter '>

                     <Link className = 'linkColor' to ='/'>Home</Link>
                     <Link className = 'linkColor' to ='/about'>About</Link>
                     <Link className = 'linkColor' to ='/catalogue'>Catalogue</Link>

                   </div>

                   <div className = 'barraTopRight'>
                      
                           
                           
                           <div className ='icon'>
                                 <i className = "material-icons md-36 "
                                    onClick   = {this.loginCheck.bind(this)}
                                 >person</i>
                           </div>
                       
                           <div className = 'icon iconCart'>
                                <i className = "material-icons md-36"
                                   onClick   = {this.cartCheck.bind(this)}
                                >shopping_cart</i>
                           </div>

                           <div className ='logoutText'><p 
                                onClick   = { this.logout.bind(this) }
                                style     = {logout}>Logout</p>
                           </div>
   
                   </div>

             </div>
	 )
    }
}



