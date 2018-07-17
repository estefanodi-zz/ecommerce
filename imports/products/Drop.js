import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Categories }     from '../api/Categories.js'

export default class  DropdownExamplePointing extends React.Component{
  constructor(){
  	super()
  	this.state = {}
  }

  componentWillMount(){
  	 Tracker.autorun( () => {
        let categories = Categories.find({}).fetch()
        this.setState({categories}, () => console.log(this.state.categories)) 
  	 })
  }
  

render(){
return(
    <Menu compact style = {{fontSize:'1em'}}>
       <Dropdown text='Sort By'  className='link item' 
	         style={{
		   width:'200px',
		   textAlign:'center',
		   fontSize : '1em'
		  }}>
      <Dropdown.Menu>       
          <Dropdown.Item
               onClick = { () => this.props.changeSort() }
          >All Products</Dropdown.Item>       
          <Dropdown.Item
               onClick = { () => this.props.changeSort(1)}
          >Price : Lower to Higher</Dropdown.Item>
          <Dropdown.Item
               onClick = { () => this.props.changeSort(-1)}
          >Price : Higher to Lower</Dropdown.Item>
                  <Dropdown.Divider/>
        <Dropdown.Item>
          <Dropdown text='Category'  style={{width:'100%'}}>
        <Dropdown.Menu>
	       <Dropdown.Item>All Categories</Dropdown.Item>
	       <Dropdown.Divider/>
	      {
		this.state.categories.map( ( ele,i ) => {
			return <Dropdown.Item
		    key     = { i }
		    onClick = { () => this.props.categorySort(ele.category)}
			>{ele.category}</Dropdown.Item>
		})
	      }
	    </Dropdown.Menu>
          </Dropdown>

        </Dropdown.Item>

        
      </Dropdown.Menu>
    </Dropdown>
   
  </Menu>

)
}}
