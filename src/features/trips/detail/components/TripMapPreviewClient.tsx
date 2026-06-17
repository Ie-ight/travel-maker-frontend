'use client'

import dynamic from 'next/dynamic'
import { css } from '@/styled-system/css'

// 지도(카카오 SDK 포함)를 초기 청크에서 분리해 lazy 로드한다.
// fold 아래 보조 콘텐츠이므로 first paint에서 제외해도 UX 손실이 없다.
const TripMapPreview = dynamic(
  () => import('./TripMapPreview').then((m) => m.TripMapPreview),
  {
    ssr: false,
    // 로드 전 동일 높이를 예약해 레이아웃 시프트를 방지한다.
    loading: () => (
      <div
        className={css({
          minH: { base: '280px', md: '420px' },
          borderWidth: '1px',
          borderColor: 'border.subtle',
          borderRadius: 'xl',
          bg: 'bg.muted',
          boxShadow: 'sm',
        })}
      />
    ),
  }
)

export default TripMapPreview
