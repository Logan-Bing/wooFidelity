
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
        const user = await this.userDao.find(arg)
        return user
    }

    async CreateUser(data)
    {
        const user = await this.userDao.create(data)
        return user
    }
}