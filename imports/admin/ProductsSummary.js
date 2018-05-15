import     React           from 'react'
import  { Categories }     from '../api/Categories'
import  { Products   }     from '../api/Products'
import ProductsSummaryList from './ProductsSummaryList'
import ShowByCategory      from './ShowByCategory'
import {     Cart    }     from '../api/Cart'
import { confirmAlert }    from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import InsertProducts      from '../InsertProducts'


export default class ProductSummary extends React.Component{
	 
	 constructor(){
	 	super()
	 	this.removeProduct = this.removeProduct.bind(this)
	 	this.changePage    = this.changePage.bind(this)
        this.state         = {
             show         : 'all products',
             sort         : 'sort by category',
             search       : ''
	 	}
	 }

	 componentWillMount(){
        
        Tracker.autorun( () => {
            Meteor.subscribe('productsAdmin')
            Meteor.subscribe('categories')
            var products   = Products.find({}).fetch()
            var categories = Categories.find({}).fetch()
          	this.setState({categories,products},()=>console.log(this.state))
          })
     }

     componentDidMount(){

      
      Meteor.call('getUserId',(error,data) =>{
           if(error){
            console.log('error message')
           }else{
            if(data!='admin'){
              this.props.history.push({pathname:'/'})
            }
           }
       })
    }
//******************************FIND PRODUCT***************************************
     handleChange = (e) => {
         this.setState({search:e.target.value})
     }

    findProduct = (e) => {
    	
     	e.preventDefault()

     	var {  search  } = this.state

     	if( search === ''){

            var products   = Products.find({}).fetch()
     		    this.setState({products})
     	}else{
     		let prod = Products.findOne({product:search})
            let products = [prod]
                this.setState({products:products,search:''})
     	}


    }
//******************************REMOVE PRODUCT*************************************

     removeProduct = (productId) => {
        

        let product = Products.findOne({_id:productId}).product

        confirmAlert({
		      title  : 'Remove product',
		      message: `You want to remove ${product} ?`,
		      buttons: [
                        { 
				          label: 'Confirm',
				          onClick: () => Meteor.call('removeProduct',productId,
                                               (err,remove)=>{
                                               	if(err){
                                                    console.log('remove product error')
                                               	}else{
                                                    Cart.remove({})
                                               	}
                                               }
				          	             )
                        },
                        {
				          label: 'Cancel',
				          onClick: () => console.log('not')
                        }
                       ]
        })
           
     }
//*********************************************************************************

    addAll = () => {
    	let products = InsertProducts.products
    	let ids      = []  

    	    products.map( (ele,i) => {
    	    	     
                     return Meteor.call('addAllProducts',ele)
    	    })
          
    }

    
       
//********************************SORTING******************************************

    changeSort = () => {
     	
     	var { show } = this.state
        Meteor.subscribe('productsAdmin')
        let products   = Products.find({}).fetch()

     	    if( show === 'all products'){this.setState({
     	    	                              products,
     	    	                              show : 'sort by category',
     	    	                              sort : 'all products'
     	    	                        })
     	    }

     	    if( show === 'sort by category'){this.setState({
     	    	                              products,
     	    	                              show : 'all products',
                                          sort : 'sort by category'
     	    	                            })
     	    }
    }
 //****************************CHANGE PAGE*****************************************

    changePage = (properties) => {
       
              
      this.props.history.push({
    		                     pathname : '/admin/product-details',
    		                     state    : {properties},
    		                     search   : `?query=${properties._id}`,
      })

    }
//(100,173,85)
//**********************************************************************************
	 render(){

	 	let findProduct = {
        	
        	width   : '40%',
        	margin  : '2% 30%'

        }

        let { show } = this.state
        let page

        if( show === 'all products') { page = <ProductsSummaryList
                                               products      = { this.state.products}
                                               removeProduct = { this.removeProduct }
                                               changePage    = { this.changePage    }
        	                                   />}

        if( show === 'sort by category') { page = <ShowByCategory
                                               products      = { this.state.products   }
                                               categories    = { this.state.categories }
                                               removeProduct = { this.removeProduct    }
                                               changePage    = { this.changePage       }
        	                                   />}

	 	return(
               <div className = 'adminAreaContainer'>


                    <div className = 'show-products-header'>
                        
                        <div  className = 'showProductsText'><p>Products</p></div>
                        <button
                           className = 'addCategory'
                           onClick   = { this.changeSort.bind(this)}
                        >{this.state.sort}</button>
                        <button
                           onClick   = { () => this.props.history.push('/admin/add-product')}
                           className = 'addCategory'
                        >Add product</button>
                    </div>
                    
                    <form       
                                onSubmit = { this.findProduct.bind(this)}
                                style    = { findProduct }>

                                <input   
	                                   value     = {this.state.search}
	                                   className = 'newCategoryInput'
                                       placeholder = 'Product name'
	                                   onChange  = {this.handleChange.bind(this)}
	                                   />
                                <button
                                       className  = 'newCategoryButton'>Find product
                                </button> 
                    </form>

                    
                   
                    <div>{page}</div>    
                    <button onClick={this.addAll.bind(this)}>ADD ALL PRODUCTS</button>
                    
               </div>
	 		  )
	 }
}