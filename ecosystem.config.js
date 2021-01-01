module.exports = {
  apps: [
    {
      name: "real_estate_backend",
      script: "./dist/server.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
