import { server } from "../web/api/indexRoute.js"
import "dotenv/config"

server.route (
    {
        method: "GET",
        url: "/",
        handler: (req, res) => {res.send({"ok": 200})}
    }
)