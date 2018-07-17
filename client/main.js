import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from '../imports/Main.js';

Meteor.startup(() => {
        render(
               <Main />, 
               document.getElementById('app')
       )
});


$.cloudinary.config({
        cloud_name:"estefanodi2009"
})
