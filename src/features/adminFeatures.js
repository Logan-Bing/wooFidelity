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
        if (!admin[0].isAdmin) throw new Error(`${admin.username} is not an admin`)

        const userDb = await this.userDao.find(userId);
        const userEntity = new User(userDb[0]);
        const addedPoints = userEntity.addPoints(points);
        await this.userDao.save(userEntity);
        return addedPoints;
    }
}