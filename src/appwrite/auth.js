import { Client, ID, Account } from "appwrite";
import conf from "../conf/config";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            })

            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }

        } catch (error) {
            console.log(error);
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })

            console.log("Login done!");
            return session;
        } catch (error) {
            console.log("Can't able to login");
            throw error
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Can't able to logout");
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get()
        } catch(error) {
            console.log("No such user found");
            return null;
        }
    }
}

const authService = new AuthService()
export default authService;