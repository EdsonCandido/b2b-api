import knex from "knex";
import {env} from '@config/env';

const pgConnection = knex({
    client: env.DATABASE_CLIENT,
    connection: {
      connectionString: env.DATABASE_URL,
      host: env['DB_HOST'],
      port: env['DB_PORT'],
      user: env['DB_USER'],
      database: env['DB_NAME'],
      password: env['DB_PASSWORD'],
      ssl: env['DB_SSL'] ? { rejectUnauthorized: false } : false,
    },
  });

  export {
    pgConnection
  }