import { server } from "./indexRoute.js";
import AdminFeatures from "../../../features/adminFeatures.js";
import PsgtUserDao from "../../db/data-access/userDao.js";
import AdminController from "../../controller/adminController.js";

const userDao = new PsgtUserDao()
const controller = new AdminController
                (
                    new AdminFeatures(userDao)
                )


server.get("/admin/:id", (req, res) => 
    {
        controller.incrementUserPoints(2 , req, res);
    }
)