import { Sequelize } from "sequelize";
import { resolve } from "path";
import { rejects } from "assert";

class Database {
  private sequelize: Sequelize;

  private static Instance: Database;

  private host = process.env.DB_HOST;
  private port = process.env.DB_PORT;
  private username = process.env.DB_USER;
  private password = process.env.DB_PASSWORD;
  private db = process.env.DB_NAME;

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

  static getInstance(): Database {
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
