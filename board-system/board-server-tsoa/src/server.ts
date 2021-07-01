// src/server.ts
import winston from './config/winston';
import { app } from "./app";

const { socket } = require('./socket');

const server = app.listen(app.get('port'), () =>
  winston.info(`Example app listening at http://${app.get('host')}:${app.get('port')}`)
);

socket(server, app);