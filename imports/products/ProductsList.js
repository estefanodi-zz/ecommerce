import React        from 'react'
import ProductsItem from './ProductsItem'

export default class ProductsList extends React.Component{
	

  
	render(){

		var { collection } = this.props
         
		return(
			    <div className='products'>
			   {
                 collection.map( (ele,i) => {
                            
                        return <ProductsItem
                              key                = { i }
                              product            = { ele }
                              showProductDetails = { this.props.showProductDetails }
                              addToCart          = { this.props.addToCart }
                              addToFav           = { this.props.addToFav  }
                               />
                 	 
                 })

			   }
               
               </div>
			  )
	}
}