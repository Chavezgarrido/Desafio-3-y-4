import express from 'express';
import cors from 'cors';
import postRouter from '../api/src/routes/photos.routes.js';

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/', postRouter);
    

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});

