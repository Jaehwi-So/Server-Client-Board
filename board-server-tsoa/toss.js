const srcPath = "./src/public";
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
const destPath = `../${dist}/dist/public`;                         
fse.copy(srcPath, destPath, err => {
  if (err) {
    console.log("copy error", err.message);
  } else {
    console.log("copy done");
    fs.exists(`${destPath}/swagger`, exist => {
      if (!exist) {
        fs.mkdirSync(`${destPath}/swagger`);
      }
      //   fs.writeFileSync(path.join(destPath, "swagger/swagger-ui-bundle.js"), fs.readFileSync("node_modules/swagger-ui-dist/swagger-ui-bundle.js"));
      fs.copyFile(
        "node_modules/swagger-ui-dist/swagger-ui-bundle.js",
        path.join(destPath, "swagger/swagger-ui-bundle.js"),
        err => {
          if (err) {
            console.log("copy error, swagger-ui-bundle.js", err.message);
          } else {
            console.log("copy done, swagger-ui-bundle.js");
          }
        }
      );
      fs.copyFile(
        "node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js",
        path.join(destPath, "swagger/swagger-ui-standalone-preset.js"),
        err => {
          if (err) {
            console.log(
              "copy error, swagger-ui-standalone-preset.js",
              err.message
            );
          } else {
            console.log("copy done, swagger-ui-standalone-preset.js");
          }
        }
      );
      fs.copyFile(
        "node_modules/swagger-ui-dist/swagger-ui.css",
        path.join(destPath, "swagger/swagger-ui.css"),
        err => {
          if (err) {
            console.log("copy error, swagger-ui.css", err.message);
          } else {
            console.log("copy done, swagger-ui.css");
          }
        }
      );
    });
  }
});


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
/*
fs.copyFile("swagger.json", `../${dist}/swagger.json`, err => {
    if(err){
        console.log("copy error, swagger.json", err.message);
    }else {
        console.log("copy done, swagger.json");
    }
});
*/
fs.copyFile(".env.production", `../${dist}/.env`, err => {
  if (err) {
    console.log("copy error, .env", err.message);
  } else {
    console.log("copy done, .env");
  }
});

