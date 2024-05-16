import { Sequelize } from "sequelize";
import config from "./Constants";

class Database {
  private sequelize: Sequelize | undefined;

  private static Instance: Database;

  private host = config.Database.db_host;
  private port = config.Database.db_port;
  private username = config.Database.db_user;
  private password = config.Database.db_password;
  private db = config.Database.db;

  constructor() {}

  static getInstance(): Database {
    if (this.Instance) return this.Instance;
    return (this.Instance = new Database());
  }

  public connectToDatabase(): void {
    this.sequelize = new Sequelize({
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.db,
      dialect: "postgres",
    });

    this.sequelize
      .authenticate()
      .then(() => {
        console.log("Database initialized");
      })
      .catch((error) => {
        console.log(`Something went wrong error: ${error}`);
      });
  }
}

export default Database;
