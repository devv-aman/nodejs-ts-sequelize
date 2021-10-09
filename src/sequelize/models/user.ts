import { DataTypes, Model } from "sequelize"
import { getModelAttributes, getModelOptions } from "./base"

class User extends Model {
  static associate(db: any) {
    // relations
  }
}

User.init(
  getModelAttributes({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }),
  getModelOptions({
    modelName: "User",
    tableName: "users",
    indexes: [{ unique: true, fields: ["username"] }, { fields: ["uuid"] }]
  })
)
