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
            throw new Error("INVALID_USER");
        return user;
    }

    async CreateUser(data)
    {
        try
        {
            return await this.userDao.create(data);
        }
        catch (error)
        {
            throw new Error("DATABASE_ERROR");
        }
    }
}