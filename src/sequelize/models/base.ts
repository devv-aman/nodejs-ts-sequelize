const { Sequelize, DataTypes, Model, InitOptions } = require("sequelize")
import settings from "../../settings"
const config = require(__dirname + "/../config.js")[settings.NODE_ENV]
// Ref: https://github.com/sequelize/sequelize/issues/1774#issuecomment-126714889
require("pg").defaults.parseInt8 = true

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

const commonModelFields: typeof Model = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  }
  // created_at and updated_at will be handled by sequelize
}

const commonModelOptions: typeof InitOptions = {
  sequelize,
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at"
}

export const getModelAttributes = (schema: typeof Model): typeof Model => {
  return {
    ...commonModelFields,
    ...schema
  }
}

export const getModelOptions = (
  options: typeof InitOptions
): typeof InitOptions => {
  return {
    ...commonModelOptions,
    ...options
  }
}
