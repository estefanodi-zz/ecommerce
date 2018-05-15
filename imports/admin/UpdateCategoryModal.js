import React, { Component } from 'react'
import { Button, Icon, Modal ,Input } from 'semantic-ui-react'

class ModalExampleMultiple extends Component {
  constructor(){
      super()
  	this.state = { 
  		           open  : false,
  		           input : '' 

  	}
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  
  handleChange = (e) => { this.setState({input:e.target.value},()=>console.log(this.state.input))}

  handleClick  = (categoryId,newCategory,category) => {
                       
  	             this.props.updateCategory(categoryId,newCategory,category)
  	             this.close()
  	             this.setState({input:''})
  }




  render() {
    const { open }     = this.state
    var newCategory    = this.state.input
    var { category   } = this.props.category
    var  categoryId    = this.props.category._id

    return (
      
             <Modal
        dimmer='inverted'
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'

        trigger = {<button className = 'catButton catButton3' onClick={this.handleOpen}>Update</button>} 
      >
    <Modal.Header style = {{
                             textAlign : 'center',
                             fontSize  : '2em'
                           }}

    >Update Category {this.props.category.category}</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='settings' />
      </div>
      <Modal.Description>
        <Input
              value     = { this.state.input } 
              onChange  = { this.handleChange.bind(this)} 
              className = 'modalInput'
        />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
     <Button 
             content = 'Update' 
             onClick = { this.handleClick.bind(this,categoryId,newCategory,category)}
     />
    </Modal.Actions>
  </Modal>
        )
  }
}





export default ModalExampleMultiple

