import { 
    Model, DataTypes, BelongsToManyGetAssociationsMixin, HasManyGetAssociationsMixin, 
    BelongsToManyRemoveAssociationMixin, BelongsToManyAddAssociationMixin, Sequelize, EnumDataType,
  } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';
import Sequelize2 from 'sequelize';
    
  export interface DomainModel{
    id: number;
    host: string;
    clientSecret?: string;
  }

  class Domain extends Model {
    public readonly id!: number;
    public host!: string;
    public clientSecret!: string;
  }

  Domain.init({
    host: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    clientSecret: {
        type: DataTypes.UUID,
        allowNull: false
    }
  }, {
      sequelize,
      modelName: 'Domain',
      tableName: 'domains',
      charset: 'utf8',
      collate: 'utf8_general_ci',
  });


    
  export const associate = (db: dbType) => {
    //db.Log.belongsTo(db.Record);
  };
    
  export default Domain;