import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';

/**
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'pg',
  connection: 'postgresql://postgres.avjbpcicggznzjkmyzsz:Jayjo495jayjo495@@aws-1-us-east-2.pooler.supabase.com:6543/postgres',
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);