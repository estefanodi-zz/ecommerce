import React         from 'react'
import Navbar        from '../Navbar'
import FirstRow      from './FirstRow'
import SecondRow     from './SecondRow'
import ThirdRow      from './ThirdRow'
import FourthRowList from './FourthRowList'
import Footer        from '../Footer'
import { Products }  from '../api/Products'


export default class Home extends React.Component{
    
    constructor(){
    	super()
    	this.random     = this.random.bind(this)
    	this.changePage = this.changePage.bind(this)
    	this.state      = { }
    }           
  
    componentWillMount(){

        Tracker.autorun( () => {
          	
          	Meteor.subscribe('products')
            var products   = Products.find({}).fetch()
          	this.random(products)
          })     
    }
//***********************RANDOM FUNCTION**************************************

    random = (products,pictures) => {
    	
    var ids  = []
    var pics = []

    for (let i = products.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [products[i], products[j]] = [products[j], products[i]];
    }
    
    for (let i = 0; i < products.length; i++) {
    	if( i < 4){
    	ids.push(products[i]._id)
        }else null
    }

    
    
    let essentials = products.slice(0,4)

    

    
        this.setState({essentials},()=>console.log(this.state))
    }
//**************************CHANGE PAGE******************************************

    changePage = (properties) => {
    	
                
       this.props.history.push({
    		                     pathname : '/product-details',
    		                     state    : {properties},
    		                     search   : `?product=${properties._id}`
      })
    }   
   
	render(){

        


		return(
			<div className = 'mainContainer'>
               <Navbar
                  history 	  = {this.props.history}
                  
               />
                <div>
		               <FirstRow/>
		               <SecondRow/>
		               <ThirdRow/>
		               <FourthRowList
                            products   = { this.state.essentials }
                            changePage = { this.changePage       } 
		               />
		               <Footer/>
                 </div>          
                           
               
            </div>
			  )
}}



