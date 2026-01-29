
export class userController
{
    constructor(UserFeatures)
    {
        this.userFeatures = UserFeatures
    }

    async view(req, res)
    {
        const id = parseInt(req.params.id);
        const user = await this.userFeatures.FindUser(id);
        res.send(user);
    }
}