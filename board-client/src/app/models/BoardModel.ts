export interface BoardModel{
  id?: number;
  title?: string;   
  content?: string;  
  nick? : string;
  ridx? : number;
  createdAt? : Date;
}  

export interface BoardRequestModel{
  id?: number;
  title?: string;   
  content?: string;  
  nick? : string;
  ridx? : number;
}  