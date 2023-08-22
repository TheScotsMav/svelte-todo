import type { Config } from 'drizzle-kit';

export default {
	schema: './src/schema/*',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		connectionString:
			'mysql://nvglb4pcq2tfs1c4vvm4:pscale_pw_TBbMra4OxjZVaScSKwFmL63XGS46hdQpH2RYqQJYsd1@aws.connect.psdb.cloud/streamingtools?ssl={"rejectUnauthorized":true}'
	}
} satisfies Config;
