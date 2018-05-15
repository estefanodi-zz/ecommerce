export default (cart)=>{
	let x = cart.find({}).fetch()
	let tot = 0
    
    	x.map( (ele,i) => {
    		return tot += ele.total;
    	})
   

	return tot
} 