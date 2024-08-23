import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDb from './config/dbconnection.js';
import errorHandelder from './middleware/errorhandeler.js';
import TeamRoutes from './routes/team_routes.js'
import UserRoutes from './routes/user_routes.js'
const app = express();
const port = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(errorHandelder);
app.use('/api/team', TeamRoutes);
app.use('/api/user', UserRoutes)
app.get('/', (req,res) =>{
    res.send("hi");
})
app.listen(port, () => {
    console.log(`Serever running on port ${port}` );
});

// TOFIX
// still saving in old database, shift to new one 