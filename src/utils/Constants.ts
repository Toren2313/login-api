const config = {
  port: 1337,
  Database: {
    db_host: "localhost",
    db_port: 5432,
    db_user: "postgres",
    db_password: "3012",
    db: "login-api",
  },
  jwt: {
    refresh_secret: "your-secret",

    access_refresh: "your-access",
  },
};

export default config;
