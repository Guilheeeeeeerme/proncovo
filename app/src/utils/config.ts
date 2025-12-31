// Environment configuration
// In React Native, we use react-native-config or similar
// For now, using a simple config object

const getEnvVar = (key: string, defaultValue?: string): string => {
  // In production, this would read from react-native-config
  // For now, return default or empty string
  return defaultValue || '';
};

export const config = {
  apiBaseUrl: getEnvVar('API_BASE_URL', 'http://localhost:3000'),
  googleMapsApiKey: getEnvVar('GOOGLE_MAPS_API_KEY', ''),
  enableLiveMode: getEnvVar('ENABLE_LIVE_MODE', 'true') === 'true',
  enableSubscription: getEnvVar('ENABLE_SUBSCRIPTION', 'true') === 'true',
  nodeEnv: getEnvVar('NODE_ENV', 'development'),
};

