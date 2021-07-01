import { 
  Model, DataTypes, BelongsToManyGetAssociationsMixin, HasManyGetAssociationsMixin, 
  BelongsToManyRemoveAssociationMixin, BelongsToManyAddAssociationMixin, Sequelize,
} from 'sequelize';
import seq from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

export interface ChatModel{
  id: number;
  content: string;   
}  

export interface ChatFormModel{
  id?: number;
  uid: number;
  content: string;  
}  

class Chat extends Model{
  public readonly id!: number;   
  public content!: string;  
}
  
Chat.init({
  content: {
      type: DataTypes.TEXT,
      allowNull: true,
  },
}, {
    sequelize,
    modelName: 'Chat',
    tableName: 'chats',
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
  
export const associate = (db: dbType) => {
  db.Chat.belongsTo(db.User, { foreignKey: 'uid', as: 'User' }); //사용자 테이블의 id 참조.
};
  
export default Chat;