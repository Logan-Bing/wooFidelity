

export default class User
{

    /**
     * @typedef {Object} User
     * @param {number} id 
     * @param {string} name 
     * @param {string} email 
     * @param {boolean} is_admin 
     * @param {number} points 
     */

    constructor(id, name, email, is_admin, points)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.is_admin = is_admin;
        this.points = points;
    }
}