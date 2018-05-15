import React               from 'react'
import ProductsSummaryItem from './ProductsSummaryItem'

export default class ProductsSummaryList extends React.Component{
    
    
    

	render(){ 

           let { products } = this.props
           

		return(
               <div>
                {
               	
                    
                    products.map( (ele,i) =>{

                

                        return <ProductsSummaryItem 
	             	                  key           = {  i  } 
	             	                  product       = { ele }
	             	                  removeProduct = { this.props.removeProduct }
	             	                  changePage    = { this.props.changePage    }
 	                            />
 	               
                    })
                
               }
               </div>
			  )
	}
}
