import { Meteor } from 'meteor/meteor';
import '../imports/api/Products.js';
import '../imports/api/Categories.js';
import '../imports/api/Orders.js';
import '../imports/api/Favourites.js';
import {URL}  from './URL_Mailer.js'




Meteor.startup(function () {
        process.env.MAIL_URL=URL
});


Accounts.config({
  forbidClientAccountCreation: true
});


Cloudinary.config({
        cloud_name: 'estefanodi2009',
        api_key: '319825339586751',
        api_secret: 'pPrajv3P7ktRj_43cMLHlvL6Kpk'
})



