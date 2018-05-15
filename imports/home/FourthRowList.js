import    React        from 'react'
import FourthRow       from './FourthRow'
import  { Cart }       from '../api/Cart'
import  { Favourites   }   from '../api/Favourites'

export default class FourthRowList extends React.Component{
    
    constructor(){
    	super()
    	this.addToCart = this.addToCart.bind(this)
      this.addToFav  = this.addToFav.bind(this)
    	this.state     = { }
    }

    

    addToCart = (properties) => {
            
    	
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
//****************************************************************************************
  addToFav = (productId,product,price) =>{

     Meteor.call('checkFav',(error,datas)=>{
        if(datas){
           
           let check = Favourites.findOne({userId:datas,productId:productId})
           if(check===undefined){
               debugger
             Meteor.call('addToFavourites',datas,productId,product,price)
           }else null
        }else null
        
     })
  }
//****************************************************************************************
	render(){

		return(<div className = 'fourthRow'>
                    
                    <div className = 'fourthRowHeader'><p>ESSENTIALS</p></div>
                         <div className = 'fourthRowBody'>

                               {
                               	this.props.products.map( (ele,i) => {
                               		 
                               		return <FourthRow
                                                     key        = {  i  }
                                                     product    = { ele }
                                                     changePage = { this.props.changePage}
                                                     addToCart  = { this.addToCart }
                                                     addToFav   = { this.addToFav  }
                               		/>
                               	})
                               }

			             </div>
              </div>
			   
			  )
	}
}