import { Client, Storage, ID } from "appwrite";
import Conf_Env from "../Conf_Env/Conf_Env";

class Storage_Service {
    Client = new Client()
    Storage_Bucket;
    fileid = null // store file id , fro use on delete method as fileid
    constructor() {
        this.Client
            .setEndpoint(Conf_Env.APPWRITE_ENDPOINT_ID)
            .setProject(Conf_Env.APPWRITE_PROJECT_ID)
        this.Storage_Bucket = new Storage(this.Client)
    }
    // Storage related services -> Store image/file , uplode image/file , dowonload image/file , previwe image/file etc 
    //  appwrite > storage > buckets > img's

    // Uplode file/img method
    async uploadfile(file) {
        try {
            const file_image_data = await this.Storage_Bucket.createFile(
                Conf_Env.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
            console.log("file uploded done");
            this.fileid = file_image_data.$id // storing file id on this var for use on delete file 

        } catch (error) {
            console.log("Error uploading file:", error.message)
            throw error


        }
    }

    // delete file.img method
    async deletefile() {
        if (!this.fileid) {
            console.log("no file and image save for delete ");
            return;
        }
        try {
            await this.Storage_Bucket.deleteFile(
                Conf_Env.APPWRITE_BUCKET_ID,
                this.fileid
            )
            console.log("file delete done ");
            this.fileid = null //// clear the stored file id after  deletion // good practice 
        } catch (error) {
            console.log("Error deleting file:", error.message)
            throw error;
        }
    }

    // get file previwe 
    getfilepreviwe() {
        return this.Storage_Bucket.getFilePreview(
            Conf_Env.APPWRITE_BUCKET_ID,
            this.fileid,
        )
    }
}
const Storage_Services = new Storage_Service()
export default Storage_Services