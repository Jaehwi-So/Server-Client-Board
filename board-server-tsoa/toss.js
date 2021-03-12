const srcPath = "./src/www";
const dist = `board-server-webpack-dist`;
const fse = require("fs-extra");
const path = require("path");
const fs = require("fs");

console.log(`                                                                                               
  ___  _   _ _____ _____  ______ ___________ _     _______   __
 / _ \| | | |_   _|  _  | |  _  \  ___| ___ \ |   |  _  \ \ / /
/ /_\ \ | | | | | | | | | | | | | |__ | |_/ / |   | | | |\ V / 
|  _  | | | | | | | | | | | | | |  __||  __/| |   | | | | \ /  
| | | | |_| | | | \ \_/ / | |/ /| |___| |   | |___\ \_/ / | |  
\_| |_/\___/  \_/  \___/  |___/ \____/\_|   \_____/\___/  \_/  
                                                              
                                                              
                                                                     `);

fs.copyFile("package.json", `../${dist}/package.json`, err => {
    if(err){
    console.log("copy error, package.json", err.message);
    } 
    else{
    console.log("copy done, package.json");
    }
});
fs.copyFile("package-lock.json", `../${dist}/package-lock.json`, err => {
    if(err){
        console.log("copy error, package-lock.json", err.message);
    }else {
        console.log("copy done, package-lock.json");
    }
});
fs.copyFile("swagger.json", `../${dist}/swagger.json`, err => {
    if(err){
        console.log("copy error, swagger.json", err.message);
    }else {
        console.log("copy done, swagger.json");
    }
});
fs.copyFile(".env.production", `../${dist}/.env`, err => {
  if (err) {
    console.log("copy error, .env", err.message);
  } else {
    console.log("copy done, .env");
  }
});
