module.exports = {
  apps: [
    {
      name: "nextjs-app", // Choose a name that makes sense for your production environment
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    local: {
      user: "shakibe",
      host: "localhost",
      ref: "origin/main",
      repo: "https://github.com/ShakibeSaib/my-next-app.git",
      path: "/home/shakibe/Desktop/next-app-jenkins",
      "pre-deploy-local": "npm install",
      "post-deploy": "npm run build && pm2 reload ecosystem.config.js --env production",
    },
  },
};

