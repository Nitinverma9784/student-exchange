const conf = {
    appwriteUrl: process.env.NEXT_PUBLIC_APPWRITE_URL || "",
    appwriteProjectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "",
    appwriteDatabaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    appwriteCollectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "",
    appwriteBucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || "",
    appwriteUserProfileCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_USERPROFILE_COLLECTION_ID) || ""
  };
  


  
  export default conf;
  