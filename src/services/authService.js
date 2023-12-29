import {users} from "../fakebackend/FakeBackend";

export const authenticate = (username, password) => {
    const user = users[username]
    if (user && user.password===password){
        const account = user.accounts[0]
        return {user, account}
    }
    return null
}