import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { LocationDb, SectorDb } from '.'
import database from '../config/database'

const models = [
  LocationDb,
  SectorDb,
]

export const init = (): Sequelize => {
  const sequelize = new Sequelize(database as SequelizeOptions)
  sequelize.addModels([...models])
  return sequelize
}
