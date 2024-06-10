import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        // host: "192.168.0.101",
        // host: "192.168.101.206",
        host: "172.16.22.98",
        // host: '172.16.22.6',
        port: '5050',
    },
});

