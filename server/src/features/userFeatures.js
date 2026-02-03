
export class UserFeatures
{
    constructor(PsgtUserDao)
    {
        this.userDao = PsgtUserDao
    }

    /**
     * @param {number} id 
     */
    async FindUser(id)
    {
        const user = await this.userDao.find(id)
        return user
    }

    async CreateUser(data)
    {
        const user = await this.userDao.create(data)
        return user
    }
}