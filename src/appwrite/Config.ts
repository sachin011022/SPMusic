import { Client, Account, Avatars, Databases } from "appwrite";
export const AppwriteConfig = {
  url: import.meta.env.VITE_APP_APPWRITE_URL,
  projectId: import.meta.env.VITE_APP_APPWRITE_PROJECT_ID,
  databaseID: import.meta.env.VITE_APP_APPWRITE_DATABASE_ID,

  // collection ID
  userCollectionID: import.meta.env
    .VITE_APP_APPWRITE_DATABASE_USERS_COLLECTION_ID,
};
export const client = new Client();

client.setEndpoint(AppwriteConfig.url);
client.setProject(AppwriteConfig.projectId);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const database = new Databases(client);
