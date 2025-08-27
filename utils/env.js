const env = {
  // App Configuration
  appName: process.env.NEXT_PUBLIC_APP_NAME,

  // API Configuration
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,

  // Socket Configuration
  socketBaseUrl: process.env.NEXT_PUBLIC_SOCKET_BASE_URL,

  // AIML Configuration
  aimlApiKey: process.env.NEXT_PUBLIC_API_KEY,
};

export const isDevelopment = process.env.NODE_ENV === 'development';

export const isProduction = process.env.NODE_ENV === 'production';

export default env;
