import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';

const gitCommitHash = execSync('git rev-parse --short --verify HEAD').toString().trim();

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: './postcss.config.js'
	},
	define: {
		__APP_VERSION__: JSON.stringify(gitCommitHash)
	}
});
