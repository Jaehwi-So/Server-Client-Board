import appRoot from 'app-root-path';
import winston, { createLogger, transports, LoggerOptions, format } from 'winston';
import split from 'split';
import winstonDaily from 'winston-daily-rotate-file';
import moment from 'moment-timezone';

const today = new Date();
const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1) <= 9 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)}-${today.getDate() <= 9 ? '0' + today.getDate() : today.getDate() + 1}`
// define the custom settings for each transport (file, console)

// Winstone set timezone https://november11tech.tistory.com/147
const appendTimestamp = format((info, opts) => {
  if(opts.tz)
    info.timestamp = moment().tz(opts.tz).format();
  return info;
});

const options = {
  file: {
    level: 'info',  //로그의 심각도. error. warn, info, verbose, debug, silly 등이 있다. info를 고른 경우 info보다 심각한 단계의 로그도 함께 기록된다.
    dirname: `${appRoot}/log`,
    filename: `app.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: '30d',
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    timestamp: () => moment().format('YYYY-MM-DD hh:mm:ss'),
    json: true,
    colorize: true,
    format: format.combine(
      appendTimestamp({tz: 'Asia/Seoul'}),
      format.json(),
      format.printf(info => {
        return `${info.timestamp} - ${info.level} [${process.pid}]: ${info.message}`;
      })
    )
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
  transports: [
    // new winston.transports.File(options.file),
    new winstonDaily(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
  format: format.combine(
    appendTimestamp({tz: 'Asia/Seoul'}),
    format.json(),
    format.printf(info => {
      return `${info.timestamp} - ${info.level} [${process.pid}]: ${info.message}`;
    })
  )
} as LoggerOptions);
// create a stream object with a 'write' function that will be used by `morgan`
const stream = split().on('data', (message: string) => { logger.info(`pid-${process.pid}- ${message}`);});
export { stream };
export default logger;