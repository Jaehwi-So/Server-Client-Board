import { 
    Model, DataTypes, BelongsToManyGetAssociationsMixin, HasManyGetAssociationsMixin, 
    BelongsToManyRemoveAssociationMixin, BelongsToManyAddAssociationMixin, Sequelize,
  } from 'sequelize';
  import seq from 'sequelize';
  import { dbType } from './index';
  import { sequelize } from './sequelize';

  export interface BoardModel{
    id: number;
    title: string;   
    content: string;  
    nick : string;
    photo : string;
  }  

  class Board extends Model{
    public readonly id!: number;
    public title!: string;   
    public content!: string;  
    public nick! : string;
    public photo! : string;
  }
    
  Board.init({
    title: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    nick: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    photo: {
      type: DataTypes.STRING(500),
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