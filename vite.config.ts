import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VitePWA 가져오기
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    outDir: 'docs',
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // 사용자에게 일반적으로 표시되는 앱명
        name: '할일 App (PWA)',
        // name 을 표시에 충분한 공간이 없는 경우 표시되는 앱명
        short_name: '할일',
        // 앱에 대한 상세설명
        description: '할일 프로그레시브 웹앱',
        /**
         * 앱 시작 URL:
         * 일반적으로 서브 디렉토리 자체
         */
        start_url: '.',
        /**
         * 표시모드:
         * fullscreen: 전체화면
         * standalone: 단독 앱처럼
         * minimal-ui: 최소한의 브라우저UI로 
         * browser: 일반브라우저
         */
        display: "standalone",
        /**
         * 앱화면 방향:
         * portrait: 세로방향
         * landscape: 가로방향
         * any: 방향을 강제하지 않음 
         */
        orientation: "portrait",
        // 기본 테마 색상
        theme_color: '#3f51b2',
        // 스타일시트가 읽기 전에 표시할 웹페이지 배경색
        background_color: "#efeff4",
        /**
         * favicon 또는 앱 아이콘 배열:
         * 최소 192x192px, 512x512px의 두가지 앱 아이콘이 필요함
         */
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-512x512-mask.png',
            sizes: '512x512',
            type: 'image/png',
            // 용도를 마스크에이블로 처리
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});