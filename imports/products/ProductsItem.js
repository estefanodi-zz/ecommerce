import React            from 'react'
import Popup from './Popup'

export default class ProductsItem extends React.Component{

    constructor(){
        super()
        this.state = { 
                      cart       :'transparent',
                      star       :'transparent',
                      visibility : 'hidden'

        }
    }
    componentWillMount(){

    	var productId = this.props.product._id 
    	
    	let visibility
   	   	
      Meteor.call('loggedCheck',(error,data)=>{
          if( data ){
                   visibility='visible' 
             }else{
                 
                   visibility='hidden'
             }
             this.setState({visibility})
      })                 
       	     
   	   	   
    	
        
    }

    changeVisibility = () => {
    	        var   productId    = this.props.product._id 
    	        let { product    } = this.props.product
    	        let { price      } = this.props.product
                if(this.state.visibility==='visible'){
                	this.setState({visibility:'hidden'})
                }
                this.props.addToFav(this.state.logged,productId,product,price)
              //debugger
    }

	render(){
         let properties     = this.props.product
         let { product    } = this.props.product
         let { price      } = this.props.product
         var   productId    = this.props.product._id
         let cart = {backgroundColor:this.state.cart}
         let star = {backgroundColor:this.state.star,
                     visibility:this.state.visibility}
         let image = { 
            background: `url(${this.props.product.pictures[0].url})` ,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position:'relative',
            zIndex:'0',
            backgroundSize: '100% 100%'
               }
               
    return(
               
                 <div className = 'pict2'>
                              
		                         <div className='essentials' style={image}>

		                            <div className = 'proof2'>
                              
                                <div onClick   = { ()=> this.props.showProductDetails(properties) }
                                      className = 'opacityGreen2'>Discover</div>
                               </div>
		                            
                            </div>     
                                          
                                     
                               

                              <div className = 'oneProductDetails2'>

                                  <div className = 'item'>{ product }</div>

                                   <div className = 'oneProductDetailsBottom2'>

                                       <Popup
                                          addToCart     = { this.props.addToCart } 
                                          productName   = { this.props.product.product }
                                          product       = { this.props.product } 
                                          price         = { this.props.product.price } 
                                       />
                                           

                                       <button style     = {star}
                                               className = 'addToCartButton'
                                               onClick   = { this.changeVisibility.bind(this)}
                                       >
                                           <i className="material-icons md-36 black">star_border</i>
                                       </button>
                                  	   <div    className = 'price'>€ { price }</div>
                                       

                                  </div>
                                  
                              </div>
                              
                        </div>
                       
              )
	}
}





























