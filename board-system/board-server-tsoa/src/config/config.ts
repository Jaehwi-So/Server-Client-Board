import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
  username: string,
  password: string,
  database: string,
  host: string,
  [key: string]: any,
}
interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}
const config: IConfigGroup = {
  "development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DATABASE_NAME || "board-system",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions": {
      "charset": "utf8mb4", 
      "dateStrings" : true, 
      "typeCast" : true 
    },
    "timezone": "+09:00",
  },
  "test": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DATABASE_NAME || "board-system",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions": {
      "charset": "utf8mb4", 
      "dateStrings" : true, 
      "typeCast" : true 
    },
    "timezone": "+09:00",
  },
  "production": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "root",
    "database": process.env.DATABASE_NAME || "board-system",
    "host": process.env.DB_HOST || 'localhost',
    "port": process.env.DB_PORT || 3306,
    "dialect": "mysql",
    "dialectOptions": {
      "charset": "utf8mb4", 
      "dateStrings" : true, 
      "typeCast" : true 
    },
  }
};

export default config;