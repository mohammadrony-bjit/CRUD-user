import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "users-db.c92tw8muuh41.ap-southeast-1.rds.amazonaws.com",
  user: "rony",
  password: "12345678",
  port: 3306,
  database: "users_db",
});
