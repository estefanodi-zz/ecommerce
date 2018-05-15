import React               from 'react'
import ProductsList        from './ProductsList'
import Navbar              from '../Navbar'
import Drop                from './Drop'
import  { Products   }     from '../api/Products.js'
import  { Categories }     from '../api/Categories.js'
import  { Favourites   }   from '../api/Favourites'
import Footer2              from '../Footer2'
import { Cart }            from '../api/Cart.js' 
import SortFunction         from './SortFunction'
import CategorySortFunction from './CategorySortFunction'
import {  Meteor  }  from 'meteor/meteor'

export default class ProductsMain extends React.Component{
    
    constructor(){
    	super()
    	this.addToCart          = this.addToCart.bind(this)
    	this.showProductDetails = this.showProductDetails.bind(this)
    	this.changeSort         = this.changeSort.bind(this)
    	this.categorySort       = this.categorySort.bind(this)
    	this.state              = { }
    }
//*************************************************************************************    
    componentWillMount(){
        
         Tracker.autorun( () => {
          
         Meteor.subscribe('products')
         
         Meteor.subscribe('categories')
        var products   = Products.find({}).fetch()
        var categories = Categories.find({}).fetch()
        
        this.setState({categories,collection:products})       
         })
    }



//*************************************************************************************
    changeSort = (way) => {
         let results = SortFunction(Products,way)
         this.setState({collection:results})
    }

    categorySort = (category) => {
                
            let cat = CategorySortFunction(Products,category,this.state.pictures)
                     
            this.setState({collection:cat})

    }
//**************************************************************************************
    showProductDetails = (properties) => {
                
       this.props.history.push({
    		                     pathname : '/product-details',
    		                     state    : {properties},
    		                     search   : `?product=${properties._id}`
       })

    }
//**************************************************************************************
    addToCart = (properties) => {
    	
        let picture      = properties.pictures[0].url
        let productId    = properties._id 
        let check        = Cart.findOne({productId:productId})
        
        if(check===undefined){         
    	Cart.insert({
    		            product     : properties.product,
                     price       : properties.price,
                     productId   : properties._id,
                     quantity    : 1,
                     total       : properties.price,
                     description : properties.description,
                     picture     : properties.pictures[0].url

    	           })
        }else null
    }
//**************************************************************************************

    addToFav = (userId,productId,product,price) =>  { 
         
    	   let check = Favourites.findOne({userId:userId,productId:productId})
    	   if(check===undefined){
    	   	   Meteor.call('addToFavourites',userId,productId,product,price)
    	   }else null
           
    }



	render(){

      
        

		return(
               <div className = 'productsContainer'>
               	<Navbar
                      history 	  = {this.props.history}
               	/>
                  <div className = 'productsMain'>
                  	
               	 
               	     <div className = 'sortByContainer'>
                 
                        
                      
                   </div>
               	   
              <div className = 'products'>

                   <ProductsList
                       collection         = { this.state.collection   }
                       showProductDetails = { this.showProductDetails }
                       addToCart          = { this.addToCart          }
                       addToFav           = { this.addToFav           }
                   /> 
                   <Footer2/>
        	 </div>
	       </div>
	       
	     </div>
              
              )
	}
}





// <div className = 'sortByContainer'>
                 
//                        <Drop
//                              changeSort   = { this.changeSort   } 
//                              categorySort = { this.categorySort }
//                        />   
                      
//                     </div>