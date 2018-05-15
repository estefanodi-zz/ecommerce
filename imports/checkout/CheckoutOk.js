import React  from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default class CheckoutOk extends React.Component{
    
    constructor(){
    	super()
    	this.state = { }
    }
    

    componentWillMount(){
       let orderNumber = this.props.location.state.number

           this.setState({orderNumber})
    }


    render(){
        
        

        return(

                        <div className = 'checkoutOkContainer'>
                            <Navbar/>
                            <div className = 'mainCheckoutOk'>

                         	      <div className = 'checkoutOkMessage'>
                         	  
                                     <div style={{  
                                                    fontSize    :'3em',
                                                    justifySelf :'center'
                                                 }}
                                        >Thank you for your order</div>
                                
                                
                                
                             

                                <div style={{  fontSize    :'1.6em',
                                               justifySelf :'center'
                                }}>Your order number is : </div>

                                <div style={{  fontSize    :'2.5em',
                                               justifySelf :'center',
                                               textDecoration: 'underline rgb(32, 154, 154)',
                                               color         : 'rgb(32, 154, 154)'
                                }}>{this.state.orderNumber}</div>

                                <div style={{   fontSize    :'2em',
                                                justifySelf :'center' 
                                }}>You will receive a confirmation email</div>

                                

                         	</div>

                        
                        </div>
                          <Footer/>
                        </div>

        )
    }
}



// <img
//                                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fq1sBH8HGsCQ8tU_FTlk5mzJrJXli-b4cecbmFD7Tu79NLjn'
//                                 width = '80%'
//                                 style = {{ 
//                                            float:'right',
//                                            display:'inline-block'
//                                        }}
//                                 />