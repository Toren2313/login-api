import { Sequelize } from "sequelize";
import config from "./Constants";
import { resolve } from "path";
import { rejects } from "assert";

class Database {
  private sequelize: Sequelize;

  private static Instance: Database;

  private host = config.Database.db_host;
  private port = config.Database.db_port;
  private username = config.Database.db_user;
  private password = config.Database.db_password;
  private db = config.Database.db;

  constructor() {
    this.sequelize = new Sequelize({
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.db,
      dialect: "postgres",
    });
  }

  static getInstance() {
    if (Database.Instance) return Database.Instance;
    return (Database.Instance = new Database());
  }

  public getSequelize(): Sequelize {
    if (!this.sequelize) throw new Error("Database not connected");
    return this.sequelize;
  }

  public async connectToDatabase(): Promise<void> {
    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Database initialized");
        resolve();
      })
      .catch((error) => {
        console.log(`Something went wrong error: ${error}`);
        rejects(error);
      });
  }
}

export default Database;
