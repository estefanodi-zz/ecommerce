import React  from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default class EmptyCart extends React.Component{

	render(){

		return(
                         <div className = 'emptyCartContainer'>
                            <Navbar history = {this.props.history}/>
                                <div className = 'emptyCartMessage'>
                         	    <div className='emptyCartHeader'>Your cart is empty!!</div>
                                <img 
                                className = 'emptyImg'
                                width = '50%'
                                //src="//cdn.shopify.com/s/files/1/1182/1150/t/13/assets/icon-cart-empty.png?4854844521882442399"/>
                                src='https://cdn.shopify.com/s/files/1/2715/3640/t/2/assets/empty-cart-icon.png?15649949477304130083'/>
                                
                                <div className='fillIt'>Fill it with something good!</div>

                                <div  onClick = { () => this.props.history.push({pathname:'/catalogue'})}
                                      className='shopNow'>Shop Now</div>

                         	</div>
                         
                           <Footer/>
                         </div>
	                    )
}

}