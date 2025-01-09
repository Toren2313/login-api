import { Model, DataTypes } from "sequelize";
import { IUser } from "../interfaces/IUser";
import Database from "../utils/database";

const db = Database.getInstance();
const sequelize = db.getSequelize();

class User extends Model<IUser> {}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: "User" },
);

export default User;
