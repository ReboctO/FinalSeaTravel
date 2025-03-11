import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../users/user.model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root", // Change to your MySQL username
  password: "", // Change to your MySQL password
  database: "seatravels", // Change to your database name
  synchronize: true,
  logging: false,
  entities: [User],
});
