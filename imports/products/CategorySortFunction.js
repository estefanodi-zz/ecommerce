export default (collection,category)=>{ 
	var cat = collection.find({category:category}).fetch()
	return cat
}
