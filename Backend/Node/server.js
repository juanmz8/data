import { error } from "node:console"
import http from "node:http"

const server = http.createServer((req, res) => {
   req.on("error", ()=> error)
   res.end("Hello World!")
})

server.listen(0, () => {
    console.log("Server listening!")
})