import express  from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';

import indexRouter from './routes/index.js';

const env = dotenv.config().parsed;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(env.APP_PORT, () => {
    console.log(`Server port ${env.APP_PORT}`);
})
