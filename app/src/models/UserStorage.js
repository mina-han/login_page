"use strict";

class UserStorage {
    static #users = {
        id: ["1","미나","한미나"],
        psword: ["1234", "1234", "123456"],
        name: ["이름", "성명", "성함"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;