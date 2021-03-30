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
import cors from 'cors';
import expressip from 'express-ip';

import winston, { stream } from './config/winston';
import moment from 'moment-timezone';
import logger from './config/winston';

export const app = express();
dotenv.config();


// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(expressip().getIpInfoMiddleware)

//passportConfig();   //passport config

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
    fs.readdirSync('resources');
} 
catch (error) {
    winston.info('resources is null directory, now mkdir');
    fs.mkdirSync('resources');
}

//view engine
app.set('view engine', 'html');
//static path
app.use(express.static(path.join(__dirname, './www')));
app.use('/img', express.static(path.join(__dirname, 'resources')));


//morgan logger option
morgan.token('date', () => {
  return moment().tz('Asia/Seoul').format();
})
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time ms :res[content-length] ":referrer" ":user-agent"', {
  stream
}));
if(process.env.NODE_ENV === 'production'){
  app.use(morgan('combined'));
}
else{
  app.use(morgan('dev'));
}

//port, host setting 
app.set('port', process.env.PORT || 8080);  
app.set('host', `${process.env.HOST}` || 'localhost');  
winston.info(`port set : ${app.get('port')}, host set : ${app.get('host')}`);


//Database Connection
const { sequelize } = require('./models');
sequelize.sync({ force: false })
.then(() => {
    winston.info('Connect MariaDB!');
})
.catch((err : any) => {
    winston.error(`[Error] Connect MariaDB`, err);
});

//Allow Cors
app.use(cors(/*{
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "authorization", "Access-Control-Allow-Origin"],
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ['*', 'http://localhost:4200', 'http://localhost:4201', 'http://localhost:8080'],
  credentials: true,
  preflightContinue: false,
}*/));


console.log(path.join(__dirname, 'resources'));
//Swagger config
try {
    switch (process.env.NODE_ENV) {
      case 'development':
          var swaggerDoc = require('../swagger.json');
          app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
          winston.info('Swagger config success : development mode');
        break;
      case 'production':
          var swaggerPath = require('../swagger.json');
          var swaggerDoc = JsonFile.readFileSync(`./dist/${swaggerPath.default}`)
          app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
          winston.info('Swagger config success : production mode');
        break;
      default:
        winston.error(`[Error] Fail to swagger config`);
        break;
    }
} catch (err) {
  winston.error(`[Error] Fail to swagger config`, err);
}


//Routes config
RegisterRoutes(app);

app.get('/', (req: express.Request, res: express.Response) => {
  if(process.env.NODE_ENV === 'production'){
    res.sendFile(path.join(__dirname, './www', "index.html"));
  }
  else{
  res.sendFile(path.join(__dirname, './www', "index.html"));
  }
});