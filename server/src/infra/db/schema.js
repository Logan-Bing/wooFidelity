import { relations } from "drizzle-orm"
import {
    integer,
    varchar,
    boolean,
    timestamp,
    pgTable,
} from "drizzle-orm/pg-core"

export const users = pgTable("users",
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        firstName: varchar("first_name", {length: 255}).notNull(),
        points: integer().notNull().default(0),
        isAdmin: boolean("is_admin").default(false),
        qrToken: integer("qr_token").default(1),

        email: varchar({length: 255}).unique().notNull(),
        password: varchar({length: 255}).notNull(),
        createdAt: timestamp("created_at").defaultNow()
    }
)

export const usersRelations = relations(users, ({many}) => ({
    coupons: many(coupons),
    transactions: many(transactions)
}))

export const rewards = pgTable("rewards",
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        name: varchar({length: 255}).unique(),
        cost: integer()
    }
)

export const rewardsRelations = relations(rewards, ({many}) => ({
   transactions: many(transactions),
   coupons: many(coupons) 
}))

export const coupons = pgTable("coupons", 
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        createdAt: timestamp("created_at").defaultNow(),
        userId: integer("user_id").references(() => users.id),
        rewardId: integer("reward_id").references(() => rewards.id)
    }
)

export const transactions = pgTable("transactions", 
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        createdAt: timestamp("created_at").defaultNow(),
        rewardId: integer("reward_id").references(() => rewards.id),
        userId: integer("user_id").references(() => users.id),
        description: varchar({length: 255})
    }
)

export const transactionsRelations = relations(transactions, ({one}) => ({
    user: one(users),
    reward: one(rewards)
}))