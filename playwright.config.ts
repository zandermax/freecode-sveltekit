import { type PlaywrightTestConfig } from '@playwright/test';

const playwright: PlaywrightTestConfig = {
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/u,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
	},
};

export default playwright;
