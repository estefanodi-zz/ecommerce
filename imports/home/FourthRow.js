import     React          from 'react'
import Popup from './Popup'

export default class FourthRow extends React.Component{
  constructor(){
        super()
        this.state = { 
                      
                      star       :'transparent',
                      visibility : 'hidden'

        }
    } 

    componentWillMount(){

      var productId = this.props.product._id 
      let visibility
      let logged
        Meteor.call('loggedCheck',(error,data)=>{

              if( data==='logged' ){
                   visibility='visible';
                   logged=true
             }else{
                 
                   visibility='hidden'
             }
        })
                       
             
           
      this.setState({visibility})
        
    }

    changeVisibility = () => {
              var   productId    = this.props.product._id 
              let { product    } = this.props.product
              let { price      } = this.props.product
                if(this.state.visibility==='visible'){
                  this.setState({visibility:'hidden'})
                }
                this.props.addToFav(productId,product,price)
             // debugger
    }

	render(){
        
        let style = {
        	background: `url(${this.props.product.pictures[0].url})` ,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
	          position:'relative',
	          zIndex:'1',
            backgroundSize: '100% 100%',
            border: '1px solid grey'
        }

        
        let star = {backgroundColor:this.state.star,
                         visibility:this.state.visibility
        }
        
        
		return(
			   
                    

                        <div className = 'pict'>
                         
                         <div className = 'essentials'
                              style={style}>
                             
                             <div className = 'proof2'>
                                  
                                  <div onClick   = { ()=> this.props.changePage(this.props.product) }
                                          className = 'opacityGreen'><p>Discover</p></div>
                              </div>
                          </div>


                          
                           <div className = 'oneProductDetails'>

                                  <div className = 'item'>{this.props.product.product}</div>

                                  <div className = 'oneProductDetailsBottom'>

                                       <Popup
                                          addToCart     = { this.props.addToCart } 
                                          productName   = { this.props.product.product }
                                          product       = { this.props.product } 
                                          price         = { this.props.product.price }
                                       />

                                       <button style     = {star}
                                               className = 'addToCartButton addToCartButton2'
                                               onClick   = { this.changeVisibility.bind(this)}
                                       >
                                           <i className="material-icons md-36 black">star_border</i>
                                       </button>
                                       <div  className = 'price'><p>{this.props.product.price} €</p></div>
                                       

                                  </div>
                                  
                              </div>

                       </div>

                       


                        
                    
			   
			  )
	}
}