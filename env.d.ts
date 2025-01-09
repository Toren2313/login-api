declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    JWT_REFERSH_SECRET: string;
    JWT_REFRESH_ACCESS: string;
  }
}
