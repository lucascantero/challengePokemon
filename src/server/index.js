import express from 'express'
import path from 'path'
import errorMiddleware from './middleware/error.middleware';

const app = express();

app.use('/public',express.static(path.join(__dirname,'../../public')));

app.use(require('./routes/index.js'));

app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`listen port ${port}`)});
