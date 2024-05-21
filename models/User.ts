import { Model, DataTypes } from "sequelize";
import { IUser } from "../interfaces/IUser";
import Database from "../utils/Database";

const sequelize = Database.getInstance().getSequelize();

class User extends Model<IUser> {}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: "User" }
);

export default User;
