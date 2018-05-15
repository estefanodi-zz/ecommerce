import React  from 'react'
import Navbar from '../Navbar.js'
import Footer from '../Footer'


export default class About extends React.Component{
	
    render(){

    	return(
            
            <div className = 'aboutContainer'>
                <Navbar history = {this.props.history}/>
                  

                   
                      
                        
                         <div className = 'aboutPicCont'>
                         	<div className = 'aboutPicInside'>

                                  <div className = 'aboutPicInsideLeft'>
                                  	    <div className = 'aboutPicInsideHeader'>
                                              <p>Our History</p>
                                  	    </div>
                                  	    <div className = 'aboutPicInsideBody'>
                                             <p>Lorem ipsum dolor sit amet, 
                                             consectetur adipiscing elit, 
                                             sed do eiusmod tempor incididunt ut 
                                             labore et dolore magna aliqua. 
                                             Ut enim ad minim veniam, quis nostrud 
                                             exercitation ullamco laboris nisi ut 
                                             aliquip ex ea commodo consequat. 
                                             Duis aute irure dolor in reprehenderit 
                                             in voluptate velit esse cillum dolore 
                                             eu fugiat nulla pariatur.</p>
                                  	    </div>

                                  </div>

                                  <div className = 'aboutPicInsideRight'>
                                  	    <div className = 'aboutPicInsideHeader'>
                                             <p>How We Work</p>
                                  	    </div>
 
                                        <div className = 'aboutPicInsideBody'>
                                             <p>Lorem ipsum dolor sit amet, 
                                             consectetur adipiscing elit, 
                                             sed do eiusmod tempor incididunt ut 
                                             labore et dolore magna aliqua. 
                                             Ut enim ad minim veniam, quis nostrud 
                                             exercitation ullamco laboris nisi ut 
                                             aliquip ex ea commodo consequat. 
                                             Duis aute irure dolor in reprehenderit 
                                             in voluptate velit esse cillum dolore 
                                             eu fugiat nulla pariatur.Velit esse cillum dolore 
                                             eu fugiat nulla pariatur</p>
                                  	    </div>

                                  </div>
                                  
                         	</div>


                         
                         
                         


                   
            	   </div>
            <Footer/>
          </div>		  
             
		
)


}

}