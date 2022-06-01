import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import vitePluginString from 'vite-plugin-string';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginString()],
  resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
})
