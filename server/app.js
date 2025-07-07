import http from "node:http"
import { createServer } from "node:http2"
import {router} from "./routes.js"
const server = createServer()
server.listen(3000, () => { console.log('300'); })

server.on("request", (req, res) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk.toString();
    });
    req.body = body;
    req.on("end", () => {
        router[req.method][req.url](req, res);
    });
});

