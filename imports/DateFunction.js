export default () =>  {


	var date  = new Date();
	var day   = date.getDate();
	var year  = date.getFullYear();
	var month = date.getMonth() + 1;
           
	var today = {day,month,year}
	           
	    return today
}