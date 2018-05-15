import   React            from 'react'
import { Orders }         from '../api/Orders.js'
import AdminOrdersItem    from './AdminOrdersItem' 
import DateFunction       from '../DateFunction'
import ChangePeriodColor  from './ChangePeriodColor'
import ChangePeriod       from './ChangePeriod'
//import FindAllCollections from '../FindAllCollections'

export default class AdminOrdersMain extends React.Component{
    
    constructor(){
    	super()
    	this.state = { 
                 //period    : '2months',
                 colors    : {
                 	           twoMonths  : 'transparent',
                 	           sixMonths  : 'transparent',
                 	           oneYear    : 'transparent',
                 	           threeYears : 'transparent'
                              },
                 orders    : [],
                 search    : ''                      
    	}
    }

    componentWillMount(){

    	Tracker.autorun( () => {
    		let today  = DateFunction()
    		Meteor.subscribe('ordersAdmin')
            var orders   = Orders.find({}).fetch()
                this.setState({today,orders})
        })

    }

    componentDidMount(){

      
      Meteor.call('getUserId',(error,data) =>{
           if(error){
            console.log('error message')
           }else{
            if(data!='admin'){
              this.props.history.push('/')
            }
           }
       })
    }
//*********************************************************************************

    changePeriod = (period,months) => {
        let colors = ChangePeriodColor(period)
        Meteor.subscribe('orders')
        var today  = new Date().toISOString()
        var date   = new Date()
        date.setMonth(date.getMonth() - period)
        var isodate = date.toISOString()
        let orders = Orders.find({ ISODate: { $gte: isodate,$lt: today }}).fetch()
        this.setState({colors,orders},()=>console.log(this.state.orders))
    }

//*********************************************************************************

    handleChange = (e) => {
         this.setState({search:e.target.value})
     }

//*********************************************************************************
    findOrder = (e) => {

     	e.preventDefault()

     	let {  search  } = this.state
        let      ord     = Orders.findOne({_id:search})
        let     order    = [ord]
 
            this.setState({orders:order,search:''})
     	
    }

//*********************************************************************************

    resetColors = () => {
        let colors = ChangePeriodColor(0)
        
        this.setState({colors})
    }

//*********************************************************************************
	render(){
        
        let findProduct = {
        	
        	width   : '40%',
        	margin  : '2% 30%'
        }

		return(
                 <div className = 'adminAreaContainer'>


                    <div className = 'usersHeader'><p>Orders</p></div>

                    <div className = 'settingDiv'>

                          <div className = 'settingDivText'>Period : </div>

	                          <div style = {{
	                          	     backgroundColor: this.state.colors.twoMonths 
	                          	   }}
	                               className = 'settingDivOpcions'
                                   onClick   = { this.changePeriod.bind(this,2,2)}
	                          >Last 2 months</div>

	                          <div style = {{
	                          	     backgroundColor: this.state.colors.sixMonths 
	                          	   }}
	                               className = 'settingDivOpcions'
                                   onClick   = { this.changePeriod.bind(this,6,6)}
	                          >Last 6 months</div>

	                          <div style = {{
	                          	     backgroundColor: this.state.colors.oneYear 
	                          	   }}
	                               className = 'settingDivOpcions'
                                   onClick   = { this.changePeriod.bind(this,1,12)}
	                          >Last year</div>

	                          <div style = {{
	                          	     backgroundColor: this.state.colors.threeYears 
	                          	   }}
	                               className = 'settingDivOpcions'
                                   onClick   = { this.changePeriod.bind(this,3,36)}
	                          >Last 3 years</div>


                          
                    </div>

                            <form       
                                onSubmit = { this.findOrder.bind(this)}
                                style    = { findProduct }>

                                <input   
	                                   value       = { this.state.search }
	                                   className   = 'newCategoryInput'
                                       placeholder = 'Order number'
	                                   onChange    = { this.handleChange.bind(this) }
                                       onFocus     = { this.resetColors.bind(this) }
	                                   />
                                <button
                                       className  = 'newCategoryButton'>Find order
                                </button> 
                            </form>


                    <div className = 'ordersBody'>

                        {
                          

                            this.state.orders.map( (ele,i) => {
                            	
                            	return <AdminOrdersItem
                                             key     = { i }
                                             datas   = { ele }
                                             history = { this.props.history }       
                            	       />
                            })

                         
                        }

                    </div>

                 </div>
			   )
	}
}
