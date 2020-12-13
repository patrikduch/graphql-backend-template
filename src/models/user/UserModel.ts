import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";


/**
 * @class UserModel Model that represents all available users.
 */
class UserModel extends Model {
  public id!: number;
  public name!: string;
  public domainUrl!: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize: Database,
    tableName: "User"
  }
);


export default UserModel;
