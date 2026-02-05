import { db } from "../db.js"
import { users } from "../schema.js"
import { eq } from "drizzle-orm"

export default class PsgtUserDao {

    async find(arg)
    {
        const user = await db
                        .select()
                        .from(users)
                        .where(eq(users.email, arg))
        return (user);
    }

    async create(data)
    {
        const newUser = await db
                        .insert(users)
                        .values(data)
        return newUser
    }

    async save(user)
    {
        await db
            .update(users)
            .set(user)
            .where(eq(users.username, user.username))
    }
}