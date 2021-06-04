import { 
    Model, DataTypes, BelongsToManyGetAssociationsMixin, HasManyGetAssociationsMixin, 
    BelongsToManyRemoveAssociationMixin, BelongsToManyAddAssociationMixin, Sequelize, EnumDataType,
  } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

export interface ResourceModel{
    id? : number,
    path : string,
    originName : string,
    savedFileName : string,
    fileSize : number,
    mimeType : string
}  


class Resource extends Model{
    public readonly id!: number;
    public path!: string;   
    public originName! : string;
    public savedFileName! : string;
    public fileSize! : number;
    public mimeType! : string;
  }
    
  Resource.init({
    path: {
        type: DataTypes.STRING(300),
    },
    originName: {
        type: DataTypes.STRING(200),
    },
    savedFileName: {
        type: DataTypes.STRING(200),
    },
    fileSize: {
        type: DataTypes.INTEGER,
    },
    mimeType: {
        type: DataTypes.STRING(200),
    },
  }, {
      sequelize,
      modelName: 'Resource',
      tableName: 'resources',
      charset: 'utf8',
      collate: 'utf8_general_ci',
  });
    
  export const associate = (db: dbType) => {

  };
    
  export default Resource;