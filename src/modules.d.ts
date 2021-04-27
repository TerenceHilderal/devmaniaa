declare namespace NodeJS {
	export interface ProcessEnv {
		HOST: string;
		DB_URL: string;
		DB_ADMIN: string;
		TOKEN_SECRET: string;
	}
}
