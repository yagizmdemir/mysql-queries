import { Response } from "./Response";
import { mySqlConnection } from "./connect";

export interface IQueryValue {
  readonly res: object;
  readonly table: string;
}

export class Query implements IQueryValue {
  public readonly res: object;
  public readonly table: string;

  constructor(res: object, table: string) {
    this.res = res;
    this.table = table;
  }

  /**
   * API'ye atılan get istekleri
   * @param {controller.request} req controllerdaki req parametresi atılacak
   * @param {controller.response} res controllerdaki res parametresi atılacak
   * @param {string} table SQL tablosunun adı gelecek
   */
  selectAllSQL = async (res = this.res, table = this.table): Promise<any> => {
    const sql = `SELECT *  FROM ${table}`;
    const rows = await mySqlConnection.query(sql, (error: any, results: any) => {
      if (error) {
        if (error.code === 'ER_NO_SUCH_TABLE') {
          return new Response().error404(res);
        }
        return new Response().error400(res);
      }
      if (!results.length) return new Response().error404(res);
      return new Response(results).success(res);
    });
    return rows;
  };

  /**
   * API'ye atılan get istekleri
   * @param {controller.request} req controllerdaki req parametresi atılacak
   * @param {controller.response} res controllerdaki res parametresi atılacak
   * @param {string} table SQL tablosu gelecek
   * @param {array} column SQL sorgusunda sütun değerleri
   * @param {array} values SQL sorgusunda WHERE değerleri
   */
  selectWhereSQL = async (res = this.res, table = this.table, column: string[], values: any[]) => {
    let cols = '';
    let clause = '';
    for (let i = 0; i < column.length; i++) {
      if (i > 0) {
        clause = ' AND `' + column[i] + '` = ?';
        cols += clause;
      } else {
        clause = '`' + column[i] + '` = ?';
        cols += clause;
      }
    }
    const sql = `SELECT * FROM ${table} WHERE ${cols}`;
    const rows = await mySqlConnection.query({ sql, timeout: 40000, values }, (error: any, results: any) => {
      if (error) return new Response().error400(res);
      if (!results.length) return new Response().error404(res);
      return new Response(results).success(res);
    });
    return rows;
  };

  /**
   * API'ye atılan post istekleri
   * @param {controller.response} res controllerdaki res parametresi atılacak
   * @param {string} table SQL sorgusunun tablosu
   * @param {object} values Tabloya kaydedilecek veriler obje olarak gönderilecek
   */
  insertSQL = async (res = this.res, table = this.table, values: object): Promise<any> => {
    const sql = `INSERT INTO ${table} SET ?`;
    const rows = await mySqlConnection.query(sql, values, (error: any, results: any) => {
      if (error) return new Response().error400(res);
      if (results.affectedRows > 0) return new Response().created(res);
    });
    return rows;
  };

  /**
   * API'ye atılan put istekleri
   * @param {controller.request} req controllerdaki req parametresi atılacak
   * @param {controller.response} res controllerdaki res parametresi atılacak
   * @param {string} table SQL sorgusunun tablosu
   * @param {array} columns SQL sorgusunun sütunları
   * @param {array} values Tabloya kaydedilecek veriler obje olarak gönderilecek
   * @param {string} where SQL sorgusunun where clause si (id = 1)
   */
  updateSQL = async (res = this.res, table = this.table, columns: string[], values: any[], where: string) => {
    let cols = '';
    let clause = '';
    for (let i = 0; i < columns.length; i++) {
      if (i !== columns.length - 1) {
        clause = columns[i] + ' = ?, ';
      } else {
        clause = columns[i] + ' = ? ';
      }
      cols += clause;
    }
    const sql = `UPDATE ${table} SET ${cols} WHERE ${where}`;
    const rows = await mySqlConnection.query(sql, values, (error: any, results: any, fields: any) => {
      if (error) return new Response().error400(res);
      if (results.affectedRows === 0) return new Response().error404(res);
      if (results.affectedRows > 0) return new Response().success(res);
    });
    return rows;
  };

  /**
   * API'ye atılan delete istekleri
   * @param {controller.request} req controllerdaki req parametresi atılacak
   * @param {controller.response} res controllerdaki res parametresi atılacak
   * @param {string} table SQL sorgusunun tablosu
   * @param {string} column SQL sorgusunun sütunu
   * @param {string} value SQL sorgusunun değeri
   */
  deleteSQL = async (res = this.res, table = this.table, column: string, value: string) => {
    const sql = `DELETE FROM ${table} WHERE ${column} = ${value}`;
    const rows = await mySqlConnection.query(sql, (error: any, results: any) => {
      if (error) return new Response().error400(res);
      if (results.affectedRows === 0) return new Response().error404(res);
      if (results.affectedRows > 0) return new Response().success(res);
    });
    return rows;
  };
}
