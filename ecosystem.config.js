module.exports = {
  apps: [
    {
      name: 'song-api',
      script: './dist/server.js',  // Point to the compiled JavaScript file
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      env: {
        NODE_ENV: 'production',
        // MONGO_URI is not hardcoded here; it will be provided by Render
      },
    },
  ],
};
