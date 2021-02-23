// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes/routes";
import * as swaggerUi from 'swagger-ui-express';
import JsonFile from 'jsonfile';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import path from 'path';

export const app = express();
dotenv.config();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

dotenv.config();    //dotenv config
//passportConfig();   //passport config
app.set('view engine', 'html'); //view engine
//static path
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));

//cookie-parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//session
const sessionOption = {
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET as string,
    cookie: {
    httpOnly: true,
    secure: false,    
    },
    //store: new RedisStore({ client: redisClient}),
}
const sessionMiddleware = expressSession(sessionOption);
app.use(sessionMiddleware);

//server upload storage
try {
    fs.readdirSync('uploads');
} 
catch (error) {
    console.error('is null directory, now mkdir');
    fs.mkdirSync('uploads');
}

//morgan option
if(process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'));
}
else{
    app.use(morgan('dev'));
}
//port, host setting 
app.set('port', process.env.PORT || 8080);  
app.set('host', `${process.env.HOST}` || '0.0.0.0');  

//Database Connection
const { sequelize } = require('./models');
sequelize.sync({ force: false })
.then(() => {
    console.log('Connect MariaDB!');
})
.catch((err : any) => {
    console.error('err', err);
});

//Swagger config
try {
    switch (process.env.NODE_ENV) {
      case 'development':
          var swaggerDoc = require('../swagger.json');
          app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
        break;
      case 'production':
          var swaggerPath = require('../swagger.json');
          var swaggerDoc = JsonFile.readFileSync(swaggerPath.default)
          app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
        break;
      default:
        console.log("fail");
        break;
    }
} catch (err) {

}

//Routes config
RegisterRoutes(app);