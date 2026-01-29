
export default class AdminController
{
    constructor (AdminFeatures)
    {
        this.adminFeatures = AdminFeatures
    }

    /**
     * 
     * @param {number} adminID a enlever quand les sessions sont init
     * @param {*} req 
     * @param {*} res 
     */
    async incrementUserPoints(adminID, req, res)
    {
        // const adminId = parseInt(req.session.id);
        const userId = parseInt(req.params.id);
        const payload = 
        {
            adminID,
            userId,
            points: 20
            // points: req.params.points
        }
        const addedPoints = await this.adminFeatures.addUserPoints(payload);
        res.send(`Add ${addedPoints} to user with id: ${userId}`);
    }
}