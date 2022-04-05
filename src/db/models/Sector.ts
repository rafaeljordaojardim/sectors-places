import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table({ tableName: 'sectors' })
export class SectorDb extends Model {
  @Column
  name: string

  @Column({ field: 'created_at' })
  createdAt: Date

  @Column({ field: 'updated_at' })
  updatedAt: Date
}
