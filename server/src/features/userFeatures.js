import httpError from "../entity/error.js";

export class UserFeatures
{
    constructor(PsgtUserDao)
    {
        this.userDao = PsgtUserDao
    }

    /**
     * @param {any} arg 
     */
    async FindUser(arg)
    {
        const user = await this.userDao.find(arg);
        if (!user.length)
            throw new httpError("Can't find user", 400);
        return user;
    }

    async CreateUser(data)
    {
        const user = await this.userDao.create(data)
        return user
    }
}