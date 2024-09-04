import express from 'express';
import env from 'dotenv';
import cors from 'cors'; // Correctly require the CORS package
import mongoose from 'mongoose';
import User from './schema/User.js';
const app = express();
env.config()

// Initialize CORS middleware


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;
  
// MongoDB URI and database name
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@govt-alert-cluster.z57vv.mongodb.net/`;



// POST endpoint to add participant data
app.post('/addParticipant', async (req, res) => {
    const { name, email, educationLevel, pins } = req.body;
    try {
        const result = await User.create({ name, email, educationLevel, pins });
        console.log(result);
        res.status(200).send({msg: 'Participant added successfully'});
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Error inserting data');
    } 
});


mongoose.connect(uri)
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})
