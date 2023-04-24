const users = require("../utils/users");

const login = (req, res) => {
    const { email, password } = req.query;
    console.log(email, password)
    const obj = {
        access: false
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i]["email"] === email && users[i]["password"] === password) {
            obj.access = true;
            break;
        }
    }
    if (obj.access) {
        res.status(200).json(obj);
    } else {
        res.status(200).json(obj);
    }
}

module.exports = login;