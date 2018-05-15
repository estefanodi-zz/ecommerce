import React from 'react'
import { Link }  from 'react-router-dom'

export default class Footer2 extends React.Component{
    
    

	render(){
		
		return(
               <div className = 'f_o_o_t_e_r2'>
                     <div className = 'footerText'>

                          <div className = 'footerTextLeft'>
                                <i className = "material-icons md-20 footerIcon">location_on</i>
                                <p className = 'footerTextLeftIn'>Via col vento 344 Barcelona</p>
                          </div>
                          <div className = 'footerTextLeft'>
                                <i className = "material-icons md-20 footerIcon">phone</i>
                                <p className = 'footerTextLeftIn'>+34 696115386</p>
                          </div>
                          <div className = 'footerTextLeft'>
                                <i className = "material-icons md-20 footerIcon">email</i>
                                <p className = 'footerTextLeftIn'>estefanodi2009@gmail.com</p>
                          </div>
                     </div>
                     <div className = 'footerTextMiddle'><Link className='linkColor2' to ='/contact'>contact us</Link></div>
                     <div className = 'footerText'>
                          
                     </div>

               </div>
			  )
	}
}