import { userController } from "../../controller/userController.js";
import { server } from "./indexRoute.js";
import { UserFeatures } from "../../../features/userFeatures.js";
import PsgtUserDao from "../../db/data-access/userDao.js";

const userDao = new PsgtUserDao();

const controller = new userController
                    (
                        new UserFeatures( userDao )
                    );

server.get("/users/:id", (req, res) =>
    {
        controller.view(req, res);
    }
)

server.listen({port: 3000});
