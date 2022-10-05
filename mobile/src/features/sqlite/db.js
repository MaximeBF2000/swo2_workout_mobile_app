import { openDatabase, enablePromise } from 'react-native-sqlite-storage'
import { initTables } from './initTables.sql'

export const db = openDatabase('./main.db', '1.0', 'MainDatabase')

export const sql = (sql, callback, args = []) => {
  db.transaction(tx =>
    tx.executeSql(sql, args, (tx, res) => {
      callback(res, tx)
    })
  )
}

export const initSQLite = () => {
  enablePromise(true)

  initTables(sql)
}
