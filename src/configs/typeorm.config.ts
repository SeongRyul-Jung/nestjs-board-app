import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '0000',
  database: 'BoardProject',
  entities: [__dirname + '/../**/**.entity.{js,ts}'],
  synchronize: true
}