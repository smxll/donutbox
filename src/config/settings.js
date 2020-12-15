  const DEVELOPMENT = {
    FIREBASE_API_KEY: 'AIzaSyBuoMofjIIYxgOSJSXQbhaq9mEk_WJJokQ',
    FIREBASE_AUTH_DOMAIN: 'chatapp-cb0b6.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'chatapp-cb0b6-default-rtdb.firebaseio.com',
    FIREBASE_PROJECT_ID: 'chatapp-cb0b6',
    FIREBASE_STORAGE_BUCKET: 'chatapp-cb0b6.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '560006605577',
  }
  
  const PRODUCTION = {
    FIREBASE_API_KEY: 'AIzaSyBuoMofjIIYxgOSJSXQbhaq9mEk_WJJokQ',
    FIREBASE_AUTH_DOMAIN: 'chatapp-cb0b6.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'chatapp-cb0b6-default-rtdb.firebaseio.com',
    FIREBASE_PROJECT_ID: 'chatapp-cb0b6',
    FIREBASE_STORAGE_BUCKET: 'chatapp-cb0b6.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '560006605577',
  }
  

export default {
	dev: __DEV__,
	// dev: false,
	apiDebugging: __DEV__,
	// apiDebugging: true,

	VERSION: '0.0.1',

	PUSH_NOTIFICATION_URL: 'https://exp.host/--/api/v2/push/send',

	...(__DEV__ ? DEVELOPMENT : PRODUCTION),
	// ...PRODUCTION,
}
