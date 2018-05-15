export default (period) => {

	let twoMonths  = 'transparent'
	let sixMonths  = 'transparent'
	let oneYear    = 'transparent'
	let threeYears = 'transparent'
	
    
   

    if( period === 2 ){ twoMonths  = '#c2d6d6' }
    if( period === 6 ){ sixMonths  = '#c2d6d6' }
    if( period === 1 ){ oneYear    = '#c2d6d6' }
    if( period === 3 ){ threeYears = '#c2d6d6' }
      
    if( period === 0 ){
                         twoMonths  = 'transparent'
                         sixMonths  = 'transparent'
                         oneYear    = 'transparent'
                         threeYears = 'transparent'
                      }


          var colors = { twoMonths , sixMonths , oneYear , threeYears }

          return colors 
    
}









