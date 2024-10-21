import 'dotenv/config';
import {z} from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().default(3000),
    JWT_SECRET: z.string(),
    JWT_EXPIRATION: z.coerce.number().default(3600),
    DATABASE_CLIENT: z.enum(['sqlite', 'pg']),
    DATABASE_URL: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().default(5432),
    DB_USER: z.string(),
    DB_NAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_SSL: z.string(),
    // NODEMAILER_HOST: z.string(),
    // NODEMAILER_PORT: z.coerce.number(),
    // NODEMAILER_USER: z.string(),
    // NODEMAILER_PASSWORD: z.string(),
    // NODEMAILER_FROM: z.string(),
});

export const env = envSchema.parse(process.env);