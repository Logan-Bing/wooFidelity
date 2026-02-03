import { db } from "../db.js"
import { users } from "../schema.js"
import { eq } from "drizzle-orm"

export default class PsgtUserDao {

    async find(id)
    {
        const user = await db
                        .select()
                        .from(users)
                        .where(eq(users.id, id))
        return (user);
    }

    async create(data)
    {
        try 
        {
            const newUser = await db
                            .insert(users)
                            .values(data)
            return newUser
        }
        catch (error)
        {
            return error;
        }
    }

    async save(user)
    {
        console.log(user)
        await db
            .update(users)
            .set(user)
            .where(eq(users.username, user.username))
    }
}