export * from './sequelize';
import Domain, { associate as associateDomain } from './domain';
import Board, { associate as associateBoard } from './board';
//모델 초기화
const db = {
  Domain,
  Board
};

export type dbType = typeof db;


//모델 관계설정
associateDomain(db);
associateBoard(db);
