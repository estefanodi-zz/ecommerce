import React            from 'react' 
import AddPictures      from './AddPictures'
import {  Meteor  }     from 'meteor/meteor'
 

export default class ProductsSummaryItem extends React.Component{
	
	constructor(){
		super()
		this.addPicture = this.addPicture.bind(this)
		this.state = { }
	}

    addPicture = (productId,url,public_id) => {
             
        Meteor.call('addPicture', productId,url,public_id)
        
    }

    


	render(){
         
         let { product    } = this.props.product
         let { price      } = this.props.product
         let { quantity   } = this.props.product
         let { categoryId } = this.props.product
         let { category   } = this.props.product
         var   productId    = this.props.product._id

         let text  = {color:'grey',textAlign:'left'} 
         let text2 = {fontSize:'2em'}

	     return(
                
               <div  
                    className = 'showProductsBodyTop'>
                         
	                 <div><p    style = {text2}>
                          <span style = {text}>Product : </span>{ product }</p>
                     </div>

	                 <div><p    style = {text2}>
	                      <span style = {text}>Price : </span>{ price } €</p>
	                 </div>

	                 <div><p    style = {text2}>
	                      <span style = {text}>In stock : </span>{ quantity }</p>
	                 </div>
	                 
	                 <div><p    style = {text2}>
	                 <span      style = {text}>Category : </span>{ category}</p>
	                 </div>

	                 <div><button className = 'catButton'
                                  onClick   = { () => this.props.changePage(this.props.product)}
	                 >details</button></div>
	                
	                 <div><button className = 'catButton'
                                  onClick   = { () => this.props.removeProduct(productId)}
	                      >remove</button></div>
	                <div><AddPictures
                          productId  = {    productId    }
                          addPicture = { this.addPicture }
	                  /></div>
                            
               </div>

	           )
	}
}