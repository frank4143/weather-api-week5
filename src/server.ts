import express from 'express';
import waetherRoute from './routes/weatherRoutes.js';

// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());

//our new route
app.use('/api/weather', waetherRoute);

// Start the express server
app.listen(PORT, () => {
  console.log('Server is listening on port ${PORT}');
});
