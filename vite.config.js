import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';
import { enhancedImages } from '@sveltejs/enhanced-img';

const gitCommitHash = execSync('git rev-parse --short --verify HEAD').toString().trim();

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	define: {
		__APP_VERSION__: JSON.stringify(gitCommitHash)
	}
});
