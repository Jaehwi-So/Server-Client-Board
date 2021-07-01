export * from './sequelize';
import Domain, { associate as associateDomain } from './domain';
import Board, { associate as associateBoard } from './board';
import User, { associate as associateUser } from './user';
import Chat, { associate as associateChat } from './chat';
//모델 초기화
const db = {
  Domain,
  Board,
  User,
  Chat
};

export type dbType = typeof db;


//모델 관계설정
associateDomain(db);
associateBoard(db);
associateUser(db);
associateChat(db);
