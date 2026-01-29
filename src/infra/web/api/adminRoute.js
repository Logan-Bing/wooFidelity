import { server } from "./indexRoute.js";
import { db } from "../../db/db.js";
import { users } from "../../db/schema.js";
import AdminFeatures from "../../../features/adminFeatures.js";
import PsgtUserDao from "../../db/data-access/userDao.js";
import AdminController from "../../controller/adminController.js";
import User from "../../../entity/user.js";

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