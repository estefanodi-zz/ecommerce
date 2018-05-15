import       React      from 'react'
import { confirmAlert } from 'react-confirm-alert'
import {   Products   } from '../api/Products'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class ShowOneProductRight extends React.Component{

   
    removeProduct = (productId) => {
        

        let product = Products.findOne({_id:productId}).product

        confirmAlert({
		      title  : 'Remove product',
		      message: `You want to remove ${product} ?`,
		      buttons: [
                        { 
				          label: 'Confirm',
				          onClick: () => Meteor.call('removeProduct',
				          	                          productId, 
				          	                          (err,success) => {
							      	     if( err ){
							      	     	console.log('error message on remove product')
							      	     }else{
							      	     	this.props.history.push({
							      	     		               pathname:'/admin/products-summary'
      	     	                         })
      	     	                         }
                                         })
                        },
                        {
				          label: 'Cancel',
				          onClick: () => console.log('not')
                        }
                       ]
        })
           
     }


	render(){
            
        var { product  }    = this.props.properties
        var { price    }    = this.props.properties
        var { quantity }    = this.props.properties
        var { description } = this.props.properties
        var  productId     = this.props.properties._id  

		return(
                <div  className = 'ShowOneProductRight'>

                            <div className = 'row'>

                                          <div className  = 'updateLabel updatelabel1'>
                                                  <p>Product : </p></div>
                                           <div className = 'updateLabel updateLabel2'>
                                                  <p>{ product }</p>
                                           </div>
                           </div>

                           <div className = 'row'>

                                          <div className  = 'updateLabel'>
                                                  <p>Price : </p></div>
                                           <div className = 'updateLabel updateLabel2'>
                                                  <p>{ price }</p>
                                           </div>
                           </div>
                            
                           <div className = 'row'>

                                          <div className  = 'updateLabel'>
                                                  <p>Quantity : </p></div>
                                           <div className = 'updateLabel updateLabel2'>
                                                  <p>{ quantity }</p>
                                           </div>
                           </div>


                            <div className = 'detailsRow'>
                                            <p>Description</p></div>
                            <div className = 'detailsRowText'>
                                            <p>{description}</p></div>


                            <div className = 'detailsRow'>
                                            <p>Details</p></div>
                            <div className = 'detailsRowText'>
                                            <p></p></div>


                            <div className = 'buttonsRow'>
                                 <button className = 'rowButton'
                                         onClick   = { this.removeProduct.bind(this,productId)}
                                 >Remove</button>
                                 <button className = 'rowButton'
                                         onClick   = { () => this.props.changePage('ShowOneProductForm')}

                                 >Update</button>
                            </div>
                </div>
			  )
	}
}