function addUser(params) {
    const { auth, email, password, displayName } = params;
    return auth.createUser({
        email,
        password,
        displayName,
    }) 
}

function getUser (params) {
    const { auth, email } = params;
    return auth.getUserByEmail(email);
}

module.exports = {
    addUser,
    getUser
}