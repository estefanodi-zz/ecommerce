export default (collection,period) => {
        
        var today  = new Date().toISOString()
        var date   = new Date()
        date.setMonth(date.getMonth() - period)
        var isodate = date.toISOString()
        var sortedDate = collection.find({ ISODate: { $gte: isodate,$lt: today }}).fetch()
        console.log(sortedDate)
        return sortedDate
}