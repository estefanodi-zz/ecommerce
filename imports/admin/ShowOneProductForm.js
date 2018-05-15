import React from 'react'

export default class ShowOneProductForm extends React.Component{
    constructor(){
    	super()
    	this.state = { }
    }

    componentWillMount(){
        let { product }    = this.props.properties
        let { price   }    = this.props.properties
        let { quantity}    = this.props.properties
        let { description} = this.props.properties
        let  productId     = this.props.properties._id
        this.setState({product,price,quantity,productId,description})
    }

    handleChange = (e) => {

        this.setState({[e.target.name]:e.target.value})
        
    }

    handleSubmit = (e) => {
    	
    	e.preventDefault()
    	var { product }      = this.state
        var price            = Number(this.state.price)
        var quantity         = Number(this.state.quantity)
        var { productId }    = this.state
        var { description }  = this.state

          Meteor.call('updateProduct',productId,product,price,quantity,description,
          	           (err,data) => {
				          	 if(err){
				          	 	console.log('error message')
				          	 }else{
				          	 	this.props.history.push({
				          	 		                pathname:'/admin/products-summary'
				          	 	})
				          	 	this.setState({})
				          	 }
          })
    }

	render(){
              
		return(
                <form  
                       onChange  = { this.handleChange.bind(this)}
                       onSubmit  = { this.handleSubmit.bind(this)}
                       className = 'ShowOneProductRight'>

                            <div className = 'row'>
                                 <div className  = 'updateLabel'>
                                                <p>Product : </p></div>
                                 <input className   = 'rowInput updateLabel2'
                                        placeholder = { this.state.product }
                                        name        = 'product'
                                 />
                            </div>

                            <div className = 'row'>
                                 <div className  = 'updateLabel'>
                                                  <p>Price : </p></div>
                                 <input className   = 'rowInput updateLabel2'
                                        placeholder = { this.state.price }
                                        name        = 'price'
                                 />
                            </div>

                            <div className = 'row'>
                                 <div className  = 'updateLabel'>
                                                  <p>Quantity : </p></div>
                                 <input className   = 'rowInput updateLabel2'
                                        placeholder = { this.state.quantity }
                                        name        = 'quantity'
                                 />
                            </div>
                            <div className = 'detailsRow'><p>Description</p></div>
                            <textarea className = 'detailsRowText'>
                                        {this.state.description}
                            </textarea>
                            <div className = 'detailsRow'><p>Details</p></div>
                            <div className = 'detailsRowText'></div>
                            <div className = 'buttonsRow2'>
                                 <button className = 'rowButton'>Update</button>
                                 

                                 
                            </div>
                </form>
			  )
	}
}