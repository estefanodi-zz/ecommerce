import        React        from 'react'
import ShowOneProductRight from './ShowOneProductRight'
import ShowOneProductForm  from './ShowOneProductForm'
import SlideShow           from 'react-image-show' 

export default class ShowOneProduct extends React.Component{
      
      

      constructor(){
      	super()
      	this.changePage    = this.changePage.bind(this)
      	this.addProperties = this.addProperties.bind(this)
      	this.state = {
                page : 'ShowOneProductRight'
      	}
      }
      
      componentWillMount(){
      	
          this.addProperties()
      }

      changePage = (page) => {
             
      	this.setState({page})
      }

      componentDidMount(){

      
      Meteor.call('getUserId',(error,data) =>{
           if(error){
            console.log('error message')
           }else{
            if(data!='admin'){
              this.props.history.push('/')
            }
           }
       })
     }
      
      addProperties = () => {
      	  let properties = this.props.location.state.properties
      	  let pictures   = this.props.location.state.properties.pictures
          let images     = []
          pictures.map( (ele,i) => {
          	return images.push(ele.url)
          })
          this.setState({properties,images}, ()=>console.log(this.state))
          
      }

      render(){
           
           let  {page } = this.state

           var show 

           if(page == 'ShowOneProductRight'){ show = <ShowOneProductRight
                                                        changePage = { this.changePage      }
                                                        properties = { this.state.properties}
                                                        history    = { this.props.history   }
                                                     />
            }
           if(page == 'ShowOneProductForm'){ show = <ShowOneProductForm
                                                        properties = { this.state.properties}
                                                        history    = { this.props.history   }
           	/>}

           return(
                  <div className = 'showOneProduct'>
                       <div className = 'ShowOneProductLeft'>
                       
                            <div className = 'slideContainer'>
                                 <SlideShow
								        images={this.state.images}
								        width="920px"
								        imagesWidth="1000px"
								        imagesHeight="550px"
								        imagesHeightMobile="56vw"
								        thumbnailsWidth="920px"
								        thumbnailsHeight="12vw"
								        indicators thumbnails fixedImagesHeight
                                  />
                            </div>
                       </div>
                       <div>{show}</div>
                  </div>
           	     )

      }
}