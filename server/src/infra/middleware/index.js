import { server } from "../web/api/indexRoute.js"
import { userController } from "../controller/userController.js"
import { UserFeatures } from "../../features/userFeatures.js"
import PsgtUserDao from "../db/data-access/userDao.js"

const userDao = new PsgtUserDao();
const controller = new userController
                (
                    new UserFeatures(userDao)
                )

server.route (
    {
        method: "POST",
        url: "/register",
        handler: (req, res) => controller.create(req, res)
    }
)