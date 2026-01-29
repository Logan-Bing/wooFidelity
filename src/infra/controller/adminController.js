
export default class AdminController
{
    constructor (AdminFeatures)
    {
        this.adminFeatures = AdminFeatures
    }

    async incrementUserPoints(req, res)
    {
        const id = parseInt(req.params.id);
        this.adminFeatures.addUserPoints(id, req.params.points);
        res.send("hello");
    }
}