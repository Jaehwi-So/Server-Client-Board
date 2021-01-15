import { 
    Model, DataTypes, BelongsToManyGetAssociationsMixin, HasManyGetAssociationsMixin, 
    BelongsToManyRemoveAssociationMixin, BelongsToManyAddAssociationMixin,
  } from 'sequelize';
  import { dbType } from './index';
  import { sequelize } from './sequelize';
    
  class Board extends Model{
    public readonly id!: number;
    public title!: string;   
    public content!: string;  
    public nick! : string;
  }
    
  Board.init({
    title: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    nick: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },

  }, {
      sequelize,
      modelName: 'Board',
      tableName: 'boards',
      charset: 'utf8',
      collate: 'utf8_general_ci',
  });
    
  export const associate = (db: dbType) => {

  };
    
  export default Board;