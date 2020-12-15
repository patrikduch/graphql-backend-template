import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

import CompanyModel from '../company/CompanyModel';


/**
 * @class UserModel Model that represents all available users.
 */
class UserModel extends Model {
  public id!: number;
  public firstName!: string;
  public surname!: string;
  public age!: number;
  public companyId!: number;
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
    },

    companyId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: Database,
    tableName: "User"
  }
);


UserModel.belongsTo(CompanyModel, { foreignKey: "companyId" });


export default UserModel;
