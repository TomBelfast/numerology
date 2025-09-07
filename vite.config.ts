import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    console.log('🔍 Debug - Environment variables:', {
        GEMINI_API_KEY: env.GEMINI_API_KEY ? `${env.GEMINI_API_KEY.substring(0, 10)}...` : 'NOT_FOUND',
        mode: mode
    });
    return {
      define: {
        'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
