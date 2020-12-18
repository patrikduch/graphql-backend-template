import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";


/**
 * @class PositionModel  Model for represenation all available positions.
 */
class PositionModel extends Model {
  public id!: number;
  public name!: string;
}

PositionModel.init(
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
    tableName: "Position"
  }
);


export default PositionModel;
