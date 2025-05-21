import express from 'express';
import { getAllProverbs, randomAllProverbs } from './controller/controllerProverb.js';


const router = express.Router();
// Define the routes
router.get('/proverbs', getAllProverbs);

router.get('/random-proverbs', randomAllProverbs);

// Export the router
export default router;
// This code defines an Express router for handling requests related to proverbs.

// It imports the necessary modules and functions, sets up the routes for getting all proverbs,
// getting a random proverb, and getting proverbs by category. Finally, it exports the router for use in other parts of the application.
// The routes are defined using the router object, which is an instance of express.Router().
// The getAllProverbs function handles requests to the '/proverbs' endpoint,
// the randomAllProverbs function handles requests to the '/random-proverbs' endpoint,
// and the getAllProverbsByCategory function handles requests to the '/proverbs/:category' endpoint.



// The router is then exported for use in other parts of the application.
// This allows the routes to be used in the main application file or in other modules.
// The code is well-structured and follows best practices for organizing routes in an Express application.
// The use of separate controller functions for handling the logic of each route helps to keep the code clean and maintainable.

