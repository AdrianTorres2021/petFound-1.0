const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

// This will fire our mongoose.connect statement to initialize our database connection
require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file

const apiRutas = require('./server/routes/pet.routes')
//const apiRoutes = require('./server/routes/person.routes')
apiRutas(app);
//apiRoutes(app);

app.listen(8080, () => console.log("The server is all fired up on port 8080"));