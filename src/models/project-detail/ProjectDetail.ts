import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";


/**
 * @class ProjectDetail Model that represents basic information about current project.
 */
class ProjectDetail extends Model {
  public id!: number;
  public name!: string;
  public domainUrl!: string;
}

ProjectDetail.init(
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

    domainUrl: {
      field: 'domain_url',
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
