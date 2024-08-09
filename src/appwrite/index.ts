import { ID, Query } from "appwrite";
import { account, AppwriteConfig, database } from "./Config";

export const signUpUser = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;

    await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
    });

    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const saveUserToDB = async (user: {
  accountId: string;
  email: string;
  name: string;
}) => {
  try {
    const activeUser = await database.createDocument(
      AppwriteConfig.databaseID,
      AppwriteConfig.userCollectionID,
      ID.unique(),
      user
    );

    return activeUser;
  } catch (error) {
    console.log(error);
  }
};
export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );
    console.log(session);
    return session;
  } catch (error) {
    console.log(error);
  }
}

// ============================== GET ACCOUNT
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) throw Error;

    const currentUser = await database.listDocuments(
      AppwriteConfig.databaseID,
      AppwriteConfig.userCollectionID,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
