import { Client, Databases, Storage, Query, ID } from "appwrite"
import CONF from "../Conf/Conf";

class Service {
    Client = new Client()
    Databases;
    Storage;

    constructor() {
        this.Client
            .setEndpoint(CONF.APPWRITE_ENDPOINT_API)
            .setProject(CONF.APPWRITE_PROJECT_ID)
        this.Databases = new Databases(this.Client)
        this.Storage = new Storage(this.Client)
    }

    async createpost({ title, slug, content, featuredImage, status, userid }) {
        try {
            return await this.Databases.createDocument(
                CONF.APPWRITE_DATABASE_ID,
                CONF.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid
                }
            )
        } catch (error) {
            console.log(error);

        }
    }

    async updatepost(slug, { title, content, featuredImage, status, }) {
        try {
            return await this.Databases.updateDocument(
                CONF.APPWRITE_DATABASE_ID,
                CONF.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status

                }
            )
        } catch (error) {
            console.log(error);

        }
    }

    async deletepost(slug) {
        try {
            await this.Databases.deleteDocument(
                CONF.APPWRITE_DATABASE_ID,
                CONF.APPWRITE_COLLECTION_ID,
                slug,

            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
                CONF.APPWRITE_DATABASE_ID,
                CONF.APPWRITE_COLLECTION_ID,
                slug,

            )
        } catch (error) {
            console.log(error);

        }
    }

    async getposts(Queries = [Query.equal("status", "active")]) {
        try {
            return await this.Databases.listDocuments(
                CONF.APPWRITE_DATABASE_ID,
                CONF.APPWRITE_COLLECTION_ID,
                Queries,
            )
        } catch (error) {
            console.log(error);

        }
    }

    /// File uplode Service / methods 

    async uploadfile(File) {
        try {
            return await this.Storage.createFile(
                CONF.APPWRITE_BUCKET_ID,
                ID.unique(),
                File

            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async deletefile(fileid) {
        try {
            return await this.Storage.deleteFile(
                CONF.APPWRITE_BUCKET_ID,
                fileid
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async filePreviwe(fileid) {
        try {
            this.Storage.getFilePreview(
                CONF.APPWRITE_BUCKET_ID,
                fileid
            )
        } catch (error) {

        }
    }
}

const service = new Service()
export default service