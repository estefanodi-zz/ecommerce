import         React         from 'react'
import ProductsSummaryItem   from './ProductsSummaryItem'

export default class ShowByCategory extends React.Component{

render(){

    return(
        <div className = 'categoryBox'>
            {
             this.props.categories.map( (ele,i) => {
                return <div key = { i }> 
                  		        
      		        <div className = 'categoryHeader'>
                         <p className = 'categoryText'>{ele.category}</p>
                    </div>

      		        <div className = 'products'>
                  	    {
              		     this.props.products.map( (ele2,i) => {
              				 	
	                         if(ele._id === ele2.categoryId){
	                         	
	                         	return <ProductsSummaryItem
	                                            key           = { i }
	                                            product       = { ele2 }
	                                            removeProduct = { this.props.removeProduct }
	                                            changePage    = { this.props.changePage    } 
	                         	        />
	                         } 
              		     })
                  	    }
                  	</div>
                  	</div>
                  	})
                  }
              </div>
			  )
	}
}