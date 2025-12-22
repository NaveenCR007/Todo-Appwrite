const conf = {
    appWriteUrl: import.meta.env.VITE_APPWRITE_ENDPOINT,
    appWriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appWriteCollectionId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appWriteCollectionName: import.meta.env.VITE_APPWRITE_COLLECTION_ID
}

export default conf;