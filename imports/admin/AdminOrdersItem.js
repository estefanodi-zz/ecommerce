import React from 'react'

export default class AdminOrdersItem extends React.Component{


    handleChangePage = () => {
    	     //debugger
    	this.props.history.push({
    		                     pathname :'/admin/order-details',
                                 state    : {datas : this.props.datas}
                                })

    }

	render(){

        let row = { 
        	        width   : '100%',
                    height  : '60px',
                    borderBottom  : '1px solid grey',
                    display : 'grid',
                    gridTemplateColumns : '4fr 2fr 4fr  1fr',
                    marginBottom: '2%'
                  }

        let text  = {color:'grey',textAlign:'left'} 
        let text2 = {fontSize:'2em'}
        let {  day  } = this.props.datas.date
        let { month } = this.props.datas.date
        let { year  } = this.props.datas.date

		return(
                <div style = { row }>
                    
                    <div><p    style = {text2}>
                          <span style = {text}>Order number : </span>{this.props.datas._id}</p>
                    </div>

                    <div><p    style = {text2}>
                          <span style = {text}>Date : </span>{day} / {month} / {year}</p>
                    </div>

                    <div><p    style = {text2}>
                          <span style = {text}>Email : </span>{this.props.datas.user.email}</p>
                    </div>

                    

                    <div><button className = 'catButton catButton3'
                                 onClick   = { this.handleChangePage.bind(this) }
	                 >details</button></div>
	                
	                 
                </div>
			  )
	}
}