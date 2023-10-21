import * as dotenv from 'dotenv';

//const dotenv = require('dotenv');

// Initialize dotenv
dotenv.config();

module.exports = ({ config }) => ({
  ...config,
  slug: 'uberClone',
  name: 'uberClone',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.uberClone',
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assest/splash.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.uberClone',
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  },
});
