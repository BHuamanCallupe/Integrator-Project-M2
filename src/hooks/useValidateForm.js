export const validate_form = (userData, errors, seterrors, target) => {
    switch (target.name) {
        case "email": // Email
            if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) || userData.email.length > 35) {
                seterrors({ ...errors, email: "Invalid Email. Must be an email valid and to have at most 35 characters long." });
            } else {
                seterrors({ ...errors, email: "" });
            }
            break;
        case "password": // password
            if (!(/^(?=.*\d).{6,10}$/.test(userData.password))) {
                seterrors({ ...errors, password: "Invalid Password. Must have at least 1 digit and be between 6 and 10 characters long." });
            } else {
                seterrors({ ...errors, password: "" });
            }
            break;
        default:
            break;
    }
}
