
export default class User
{

    /**
     * @typedef {Object} User
     * @param {number} id 
     * @param {string} firstName
     * @param {string} email 
     * @param {boolean} isAdmin 
     * @param {number} points 
     */

    constructor({id, username, firstName, email, isAdmin, points})
    {
        this.id = id;
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
        if (points > 120) this.points = 120;
        return this.points - pointsBeforeAdd;
    }
}