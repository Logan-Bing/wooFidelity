import {drizzle} from "drizzle-orm/node-postgres";
import "dotenv/config"
import PsgtUserDao from "../data-access/userDao.js";
import { UserFeatures } from "../../features/userFeatures.js";

export const db = drizzle(process.env.DATABASE_URL);


const psgtUser = new PsgtUserDao();
const userF = new UserFeatures(psgtUser);

const user = await userF.FindUser(1);
console.log(user)