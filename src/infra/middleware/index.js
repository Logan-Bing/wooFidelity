import { server } from "../web/api/indexRoute.js"
import "dotenv/config"

server.route(
    {
        method: "POST",
        path: "/",
        handler: (req, res) => {
            req.session.set('user', req.body)
            res.send({ok: "200"});
        }
    }
)

server.route(
    {
        method: "GET",
        path: "/",
        handler: (req, res) => {
            const data = req.session.data("user");
            res.send(data);
        }
    }
)