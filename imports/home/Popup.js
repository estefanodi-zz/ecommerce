import React from 'react'
import { Header, Button, Popup, Grid } from 'semantic-ui-react'

const timeoutLength = 2500
export default class PopupExampleFlowing extends React.Component{
  
  constructor(){
    super()
    this.state = { 
         cart :'transparent',
         isOpen: false
    }
  }


  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render(){

    let cart = {backgroundColor:this.state.cart
        }

  return(<Popup
    trigger={<button onClick   = { ()=> this.props.addToCart(this.props.product) }
                     style={cart}
                     className = 'addToCartButton addToCartButton2'
                    
    	><i className="material-icons md-36 black">shopping_cart</i></button>}
            content={`${timeoutLength / 1000}`}
            on='click'
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='top right'
  >
    <Grid centered divided columns={3}>
      <Grid.Column style={{width:'150px'}} textAlign='center'>
        <Header as='h4'>{this.props.productName}</Header>
        <p>{this.props.price} €</p>   
        <p>Added to cart</p>
      </Grid.Column>
      
    </Grid>
  </Popup>
)
}
}



