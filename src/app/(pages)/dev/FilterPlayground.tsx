'use client'

import { FilterCard } from '@/components/filters/filter-card'
import { travelFilterSections } from '@/lib/filter-data'
import { css } from '@/styled-system/css'

export function FilterPlayground() {
  return (
    <div className={css({ display: 'grid', gap: '8' })}>
      {/* FilterCard: 탭형 전체 필터 카드 */}
      <div>
        <Label>FilterCard — 탭형 필터 (filter-card.tsx)</Label>
        <Desc>
          sections 배열을 받아 탭·드롭다운·선택바·초기화/적용 버튼을 한 번에
          제공하는 완성형 컴포넌트
        </Desc>
        <FilterCard
          sections={travelFilterSections}
          resultCount={42}
          onApply={() => {}}
          onReset={() => {}}
        />
      </div>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={css({
        fontSize: 'sm',
        fontWeight: 'bold',
        color: 'text.primary',
        mb: '1',
        fontFamily: 'mono',
      })}
    >
      {children}
    </p>
  )
}

function Desc({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={css({
        fontSize: 'xs',
        color: 'text.secondary',
        mb: '3',
      })}
    >
      {children}
    </p>
  )
}
