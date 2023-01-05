import mysql2 from "mysql2"

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  database: 'schema_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
export default pool.promise();