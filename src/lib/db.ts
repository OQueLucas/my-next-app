import sql from "mssql";
import dotenv from "dotenv";
dotenv.config();

export const config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  server: process.env.DB_SERVER!, // <== ESSA LINHA ESTÁ CAUSANDO O ERRO
  database: process.env.DB_DATABASE!,
  port: Number(process.env.DB_PORT || 1433),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

let pool: sql.ConnectionPool | null = null;

export async function getDbConnection() {
  console.log("DB Config:", config);

  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}
