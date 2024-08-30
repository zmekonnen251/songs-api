module.exports = {
  apps: [
    {
      name: 'song-api',
      script: './dist/index.js',  // Point to the compiled JavaScript file
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      env: {
        NODE_ENV: 'production',
        MONGO_URI: 'mongodb://mongodb:27017/songs-db',
      },
    },
  ],
};
