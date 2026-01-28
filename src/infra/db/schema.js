import {
    integer,
    varchar,
    boolean,
    date,
    pgTable,
} from "drizzle-orm/pg-core"

export const users = pgTable("users",
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        firstName: varchar("first_name", {length: 255}).notNull(),
        points: integer().notNull().default(0),
        isAdmin: boolean("is_admin").default(false),
        qrToken: integer("qr_token").notNull(),

        username: varchar({length: 255}).unique().notNull(),
        email: varchar({length: 255}).unique().notNull(),
        password: varchar({length: 255}).notNull(),
    }
)
