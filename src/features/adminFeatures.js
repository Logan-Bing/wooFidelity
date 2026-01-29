import User from "../entity/user.js";

export default class AdminFeatures
{
    constructor (PsgtUserDao)
    {
        this.userDao = PsgtUserDao;
    }

    /**
     * 
     * @param {number} userId
     * @param {*} points
     */
    async addUserPoints({adminID, userId, points})
    {
        const admin = await this.userDao.find(adminID);
        if (!admin.isAdmin) throw new Error(`${admin.username} is not an admin`)

        const userDb = await this.userDao.find(userId);
        const userEntity = new User(userDb[0]);
        return userEntity.addPoints(points);
    }
}