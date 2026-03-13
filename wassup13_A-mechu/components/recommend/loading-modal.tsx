'use client'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Spinner } from '@/components/ui/spinner'

interface LoadingModalProps {
  open: boolean
}

export function LoadingModal({ open }: LoadingModalProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[320px] border-0 shadow-xl" showCloseButton={false}>
        <VisuallyHidden>
          <DialogTitle>AI 메뉴 추천 분석 중</DialogTitle>
          <DialogDescription>AI가 주문 패턴과 리뷰 데이터를 분석하고 있습니다</DialogDescription>
        </VisuallyHidden>
        <div className="flex flex-col items-center py-6 gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="relative bg-primary/10 p-4 rounded-full">
              <Spinner className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-foreground">AI 분석 중</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI가 주문 패턴과 리뷰 데이터를<br />
              분석하고 있습니다...
            </p>
          </div>
          <div className="flex gap-1 mt-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
