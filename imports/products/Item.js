import React     from 'react'
import Navbar    from '../Navbar'
import SlideShow from 'react-image-show'
import { Cart }  from '../api/Cart'
import Footer    from '../Footer'


export default class Item extends React.Component{
    
    constructor(){
    	super()
    	this.state = { }
    }
    
    componentWillMount(){

      	  let properties = this.props.location.state.properties
      	  let pics       = this.props.location.state.properties.pictures
      	  let images = []
      	  pics.map( (ele,i) => {
      	  	return images.push(ele.url)
      	  })
          this.setState({properties,images})

    }
  
    addToCart = () => {

        let check = Cart.findOne({productId:this.state.properties._id})
        
        if(check===undefined){         
           Cart.insert({
                     product     : this.state.properties.product,
                     price       : this.state.properties.price,
                     productId   : this.state.properties._id,
                     quantity    : 1,
                     total       : this.state.properties.price,
                     description : this.state.properties.description,
                     picture     : this.state.images[0]

           })
        }else null
    }
    

	render(){
    
    
		return(
               <div className = 'singleItemContainer'>
                   <Navbar history = {this.props.history}/>
                   
                      
                      <div className = 'mainSingleItem2'>


                   	   <div  className = 'picsMainContainer'>
                            
                               <SlideShow
                                        
          								        images={this.state.images}
          								        width="920px"
          								        imagesWidth="800px"
          								        imagesHeight="450px"
          								        imagesHeightMobile="56vw"
          								        thumbnailsWidth="920px"
          								        thumbnailsHeight="12vw"
          								         thumbnails fixedImagesHeight
                               />
                             
                   	   </div>


                   	   <div  className = 'descrMainContainer'>

                             <div className = 'descrHeader'>
                                  <p className = 'descrHeaderText'>{this.state.properties.product}</p>
                                  <p className = 'descrDescrPrice'>€ {this.state.properties.price}</p>
                             </div>
                             
                             <div className = 'descrDescrTitle'>Description</div>

                             <div className = 'descrDescrText'>   
                                 <p>
                                     { this.state.properties.description }
                                 </p>
                             </div>

                             <div className = 'descrDescrTitle'>Details</div>

                             <div className = 'descrDescrText'>
                                   <p>
                                   	  { this.state.properties.details }
                                   </p>
                             </div>

                             <button 
                                    onClick   = { this.addToCart.bind(this) }
                                    className = 'add_to_cart'>Add to cart</button>
                    </div>         

                            
                            

                         
                   	   </div>
                   
                  <Footer/>
               </div>
			  )
    }
	}













