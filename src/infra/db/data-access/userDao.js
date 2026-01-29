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
}