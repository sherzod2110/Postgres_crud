import express from 'express';
import router from './module/router.js';
import exceptionHandler from './middlewares/exception-handler.js'

const app = express();

app.use(express.json())
app.use(router)
app.use(exceptionHandler)

app.listen(9090, console.log(9090));