// Import the express module and create a router object
var express = require('express');
var router = express.Router();  // Router instance to handle routes

// Import the controller that handles the 'contact' page functionality
const controller = require('../controllers/contact_controller');  // Load the controller for the contact page

/* GET contact page route */
// When the user accesses the root URL ('/'), the 'contact' function from the controller is called
router.get('/', controller.contact);

// Export the router module so it can be used in other parts of the application
module.exports = router;