import React from 'react'

export default class ThirdRow extends React.Component{
	render(){

        let firstPtag = { fontSize:'2em'}
		return(
               <div className = 'thirdRow'>
               	    <div className = 'fixedImg'>

                         <div className = 'divOnImg'>
                           
		                            <p style = {firstPtag}>Only on Saturday </p>
		                            <p style = {firstPtag}>20% Off </p>
                           
                          </div>  
               	    </div>
               	    
               </div>
			   )
	}
}