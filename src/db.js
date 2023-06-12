import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "rony",
  password: "12345678",
  port: 3306,
  database: "users_db",
});
