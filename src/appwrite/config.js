import { Databases, Client, ID, Query } from "appwrite";
import conf from '../conf/config'

class Storage {
    client = new Client()
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)

        this.databases = new Databases(this.client)
    }


    async createTask({ todoTitle }) {
        try {
            const result = await this.databases.createDocument({
                databaseId: conf.appWriteDatabaseId,
                collectionId: conf.appWriteCollectionId,
                documentId: ID.unique(),

                data: {
                    todoTitle
                }
            })

            return result
        } catch (error) {
            console.log(error);
        }
    }


    async updateTask(id, { todoTitle }) {
        try {
            const result = await this.databases.updateDocument({
                databaseId: conf.appWriteDatabaseId,
                collectionId: conf.appWriteCollectionId,
                documentId: id,

                data: {
                    todoTitle
                }

            })
            console.log("Task updated");
            return result;

        } catch (error) {
            console.log(error);
        }
    }


    async listTasks(id) {
        try {
            const tasks = this.databases.listDocuments({
                databaseId: conf.appWriteDatabaseId,
                collectionId: conf.appWriteCollectionId,
                queries: [tasks.id === id]
            })

            return tasks
        } catch (error) {
            console.log(error);
        }
    }


    async deleteTask(id) {
        try {
            await this.databases.deleteDocument({
                databaseId: conf.appWriteDatabaseId,
                collectionId: conf.appWriteCollectionId,
                documentId: id
            })

            return true;
        } catch (error) {
            console.log("Can't able to delete");
            return false;
        }
    }
}

const storageService = new Storage()
export default storageService