export default (collection) => {
    
    let quantities = []

    collection.map( (ele,i) => {
         quantities.push({quantity:ele.quantity,productId:ele.productId})
    })
    
    return quantities
}