import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    // 프로덕션 빌드에서만 console 제거(의도적 error/warn은 보존)
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // 최적화된 이미지 재생성 방지(불변 원격 자산이라 길게 캐시) — 31일
    minimumCacheTTL: 2678400,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'tong.visitkorea.or.kr' },
      { protocol: 'http', hostname: 'tong.visitkorea.or.kr' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      {
        protocol: 'https',
        hostname: 'travel-maker-bucket.s3.ap-northeast-2.amazonaws.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
