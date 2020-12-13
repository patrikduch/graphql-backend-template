import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";


/**
 * @class CompanyModel  Model for represenation all available companies for specific User model.
 */
class CompanyModel extends Model {
  public id!: number;
  public name!: string;

}

CompanyModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize: Database,
    tableName: "Company"
  }
);


export default CompanyModel;
