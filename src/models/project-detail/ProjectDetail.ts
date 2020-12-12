import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";


class ProjectDetail extends Model {
  public id!: number;
  public name!: string;
  public domainUrl!: string;
}

ProjectDetail.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    domainUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: Database,
    tableName: "projectdetail"
  }
);


export default ProjectDetail;
