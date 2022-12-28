import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRouter.js';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(fileUpload());


app.use(userRoutes);

app.listen(5000, () => {
    console.log('server Running at http://localhost:5000');
})