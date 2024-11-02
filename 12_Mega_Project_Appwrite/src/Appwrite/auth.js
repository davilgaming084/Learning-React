import { Client, Account, ID } from "appwrite"
import CONF from "../Conf/Conf";
class Auth {
    Client = new Client()
    Account;
    constructor() {
        this.Client
            .setEndpoint(CONF.APPWRITE_ENDPOINT_API)
            .setProject(CONF.APPWRITE_PROJECT_ID)

        this.Account = new Account(this.Client)
    }

    async createAccount({ email, password, name }) {
        try {
            const accountCreated = await this.Account.create(ID.unique(), email, password, name);
            if (accountCreated) {
                return this.login({ email, password });
            } else {
                return accountCreated;  
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.Account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Log in error:", error);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.Account.deleteSessions();
        } catch (error) {
            console.error("Can't logout:", error);
            throw error;
        }
    }

    async userExist() {
        try {
            await this.Account.get();
            return true;
        } catch (error) {
            console.log("User does not exist");
            return false;
        }
    }
}
const AuthService = new Auth()
export default AuthService