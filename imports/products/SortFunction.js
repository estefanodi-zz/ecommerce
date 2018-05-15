export default (collection,way)=>{ 

    
	const options  = { sort: { price: way } }  
    var   results

    if( !way ){
         results = collection.find({}).fetch()
    }else{
         results = collection.find({},options).fetch();
    }

	return results
}