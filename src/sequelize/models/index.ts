import { sequelize } from "./base"

import "./user"

let db: any = {}

db = { sequelize, ...sequelize.models }

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

export default db
