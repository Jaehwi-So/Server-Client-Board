  import { 
    Model, DataTypes, BelongsToManyGetAssociationsMixin, HasManyGetAssociationsMixin, 
    BelongsToManyRemoveAssociationMixin, BelongsToManyAddAssociationMixin, Sequelize,
  } from 'sequelize';
  import seq from 'sequelize';
  import { dbType } from './index';
  import { sequelize } from './sequelize';

  export interface UserModel{
    id: number;
    email: string;   
    password: string;  
    nick : string;
  }  

  export interface UserReqModel{
    email: string;   
    password: string;  
    nick? : string;
  }  

  class User extends Model{
    public readonly id!: number;  //!는 null과 undefined를 허용
    public email!: string;   
    public password!: string;  
    public nick! : string;
  }
    
  User.init({
    email: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    nick: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
  }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci',
  });
    
  export const associate = (db: dbType) => {

  };
    
  export default User;