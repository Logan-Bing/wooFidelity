import bcrypt, {hash} from "bcrypt"

export class userController
{
    constructor(UserFeatures)
    {
        this.userFeatures = UserFeatures
    }

    setUserSession(req, user)
    {
        req.session.set('user', 
        {
            id: user.id,
            firstName: user.firstName,
            points: user.points,
            isAdmin: user.isAdmin
        })
    }

    async view(req, res)
    {
        const id = parseInt(req.params.id);
        const user = await this.userFeatures.FindUser(id);
        res.send(user);
    }

    async create(req, res)
    {
        try
        {
            const {firstName, email, password} = req.body;
            const salt = 10;
            const password_hash = await hash(password, salt);
            const payload =
            {
                firstName,
                email,
                password: password_hash
            }
            await this.userFeatures.CreateUser(payload);
            const [user] = await this.userFeatures.FindUser(email);
            this.setUserSession(req, user);
            res.send(user);
        }
        catch (error)
        {
            console.log(error);
            res.statusCode = 400;
            res.send(error);
        }
    }

    async login(req, res)
    {
        const {email, password} = req.body;
        try
        {
            const [user] = await this.userFeatures.FindUser(email);
            const match = await bcrypt.compare(password, user.password);
            if (!match)
                throw new Error("INVALID_USER");
            this.setUserSession(req, user);
            res.send({user});
        }
        catch(error)
        {
            console.log(error);
            res.statusCode = 400;
            res.send(error);
        }
        res.send({ok: "200"});
    }
}