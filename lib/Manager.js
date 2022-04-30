// Manager Class
class Manager {
    constructor(role, name, id, email, roleType) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.roleType = roleType;
    }
}

module.exports = Manager;
