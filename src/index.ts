// import * as express from "express";
// class App {
//   public application: express.Application;
//   constructor() {
//     this.application = express();
//   }
// }
// const app = new App().application;
// app.get("/", (req: express.Request, res: express.Response) => {
//   res.send("start");
// });
// app.listen(4000, () => console.log("start"));

var http = require("http");
var fs = require("fs");

http
  .createServer(function (request: any, response: any) {
    if (request.url.startsWith("/counter")) {
      let todayVisited: number = 0;
      fs.readFile("data", "utf-8", function (err: any, data: number) {
        if (err?.code === "ENOENT") {
          fs.writeFileSync("data", "1", "utf-8");
          todayVisited = 1;
        } else {
          todayVisited = +data + 1;
          fs.writeFileSync("data", "" + todayVisited, "utf-8");
        }
      });
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ todayVisited }), "utf-8");
    } else {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end(`Hello! You've requested with url ${request.url}`, "utf-8");
    }
  })
  .listen(8125);
console.log("Server running at http://127.0.0.1:8125");
