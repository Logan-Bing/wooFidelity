
export default class User
{
    MAX_POINTS = 120;
    MIN_POINTS = 0;

    /**
     * @typedef {Object} User
     * @param {number} id 
     * @param {string} firstName
     * @param {string} email 
     * @param {boolean} isAdmin 
     * @param {number} points 
     */

    constructor({username, firstName, email, isAdmin, points})
    {
        this.username = username;
        this.firstName = firstName;
        this.email = email;
        this.isAdmin = isAdmin;
        this.points = points;
    }

    addPoints(points)
    {
        if (points <= 0) throw new Error("Invalid points input");
        const pointsBeforeAdd = this.points;
        this.points += points;
        if (this.points > this.MAX_POINTS) this.points = this.MAX_POINTS;
        return this.points - pointsBeforeAdd;
    }

    removePoints(points)
    {
        if (points <= 0) throw new Error("Invalid points input");
        const pointsBeforeRemove = this.points;
        this.points -= points;
        if (this.points > this.MIN_POINTS) this.points = this.MIN_POINTS;
        return pointsBeforeRemove - this.points;
    }
}