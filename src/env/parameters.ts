import dotenv from 'dotenv';
dotenv.config();
export class Parameters {
  static get port(): number {
    return Number(process.env.PORT);
  }

  static get dbConfig() {
    return {
      port: process.env.DB_PORT
    };
  }
}
