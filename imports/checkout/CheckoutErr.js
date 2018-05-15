import React  from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default class CheckoutErr extends React.Component{

	render(){

		return(
                        <div className = 'checkoutOkContainer'>
                           <Navbar/>
                           <div className = 'mainCheckoutOk'>

                         	<div className = 'checkoutErrMessage'>
                         	  

                         	    
                         	    <div style={{  fontSize    : '3em',
                                               textAlign   : 'center'
                                }}>An error has ocurred.</div>
                                
                                
                                <div style = {{textAlign:'center'}}>
                                	
                                      <img
                                          width = '15%'
                                          src   = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/768px-Grey_close_x.svg.png'
                                      />

                                </div>
                             

                                <div style={{  fontSize    :'1.6em',
                                               justifySelf :'center'
                                }}><p>Something wrong occurred during the process.</p></div>

                                

                                

                         	</div>

                        
                        </div>
                        <Footer/>
                        </div>
                        )

}
}