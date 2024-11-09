import { Client, Databases, Storage, Query, ID, Query } from "appwrite"
import Conf_Env from "../Conf_Env/Conf_Env";

class Database_Services {
    Client = new Client()
    Databases;
    constructor() {
        this.Client
            .setEndpoint(Conf_Env.APPWRITE_ENDPOINT_ID)
            .setProject(Conf_Env.APPWRITE_PROJECT_ID)

        this.Databases = new Databases(this.Client)
    }
    //////////////////// ----------  Database service

    // create document  Artical-> appwrite > database = "blog" > collection = "articals" > articles = " createdocument " 
    // createing artcial on database 
    async createDocument_Artical({ title, content, featuredImage, status, userid }) {
        try {
            constcreateDocument = await this.Databases.createDocument(
                Conf_Env.APPWRITE_DATABASE_ID,
                Conf_Env.APPWRITE_COLLECTION_ID,
                title,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid
                }
            )
            if (constcreateDocument) {
                return constcreateDocument
            }
        } catch (error) {
            console.log(error.message);
            throw error

        }
    }
    // update artical of collection<database 
    async updateDocument_Artical({ title, content, featuredImage, status }) {
        try {
            return this.Databases.updateDocument(
                Conf_Env.APPWRITE_DATABASE_ID,
                Conf_Env.APPWRITE_COLLECTION_ID,
                title,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error.message);
            throw error

        }
    }
    // delete articadl , colllection< database 
    async deleteDocument_Artical(title) {
        try {
            await this.Databases.deleteDocument(
                Conf_Env.APPWRITE_DATABASE_ID,
                Conf_Env.APPWRITE_COLLECTION_ID,
                title,

            )
            return true
        } catch (error) {
            console.log(error.message);
            // throw error
            return false
        }
    }
    // Grab 1 artical of databse>collect>articals
    //                   blog> artical> all articals

    async get_find_Document_Artical(title) {
        try {
            return await this.Databases.getDocument(
                Conf_Env.APPWRITE_DATABASE_ID,
                Conf_Env.APPWRITE_COLLECTION_ID,
                title,

            )
        } catch (error) {
            console.log(error.message);
            throw error

        }
    }
    // Grab 1 artical of databse>collect>articals
    //                   blog> artical> all articals
    async getALL_find_Document_Artical(Queryes = [Query.equal("status", "active")]) {
        try {
            return await this.Databases.listDocuments(
                Conf_Env.APPWRITE_DATABASE_ID,
                Conf_Env.APPWRITE_COLLECTION_ID,
                Queryes

            )
        } catch (error) {
            console.log(error.message);
            throw error

        }
    }
    
}

const Database_Service = new Database_Services()
export default Database_Service;