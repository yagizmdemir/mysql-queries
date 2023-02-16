import { Query } from './utils/Query';

export const selectWhereSQL = (res: object, table: string, column: string[], values: any[]): Promise<any> => {
  return new Query(res, table).selectWhereSQL(res, table, column, values);
};

export const selectAllSQL = (res: object, table: string): Promise<any> => {
  return new Query(res, table).selectAllSQL(res, table);
};

export const insertSQL = (res: object, table: string, values: object): Promise<any> => {
  return new Query(res, table).insertSQL(res, table, values);
};

export const updateSQL = (res: object, table: string, columns: string[], values: any[], where: string): Promise<any> => {
  return new Query(res, table).updateSQL(res, table, columns, values, where);
};

export const deleteSQL = (res: object, table: string, column: string, value: string): Promise<any> => {
  return new Query(res, table).deleteSQL(res, table, column, value);
};
