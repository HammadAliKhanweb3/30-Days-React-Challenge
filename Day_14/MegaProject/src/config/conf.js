const conf = {
  appWriteUrl: String((VITE_APP_APPWRITE_URL = "https://cloud.appwrite.io/v1")),
  appWriteProjectId: String((VITE_APP_PROJECT_ID = "66313599003ab4a8ba26")),
  appWriteDatabaseId: String((VITE_APP_DATABASE_ID = "66313719003d28808e16")),
  appWriteCollectionId: String(
    (VITE_APP_COLLECTION_ID = "663137600021e55353f3")
  ),
  appWriteBucketId: String((VITE_APP_BUKKET_ID = "663138f1002cac9970a2")),
};

export default conf;
