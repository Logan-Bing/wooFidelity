import PsgtUserDao from "../data-access/userDao";
import { UserFeatures } from "../../features/userFeatures";

export class userController
{

    constructor(UserFeatures)
    {
        this.UserFeatures = UserFeatures
    }

    async view(req, res)
    {
        
    }
}