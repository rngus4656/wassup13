'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

interface FeedbackModalProps {
  open: boolean
  onClose: () => void
}

export function FeedbackModal({ open, onClose }: FeedbackModalProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (rating === 0) {
      toast.error('별점을 선택해주세요')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Store feedback locally
    const feedback = {
      rating,
      comment,
      timestamp: new Date().toISOString()
    }
    
    const existingFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]')
    localStorage.setItem('feedbacks', JSON.stringify([...existingFeedbacks, feedback]))
    
    toast.success('소중한 피드백 감사합니다')
    setRating(0)
    setComment('')
    setIsSubmitting(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader>
          <DialogTitle className="text-center">피드백 보내기</DialogTitle>
          <DialogDescription className="text-center text-sm">
            추천 서비스 개선을 위해 의견을 남겨주세요
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-5 py-2">
          {/* Star Rating */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">별점 선택</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    className={cn(
                      'h-8 w-8 transition-colors',
                      (hoverRating || rating) >= star
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground/30'
                    )}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-muted-foreground">
                {rating === 5 ? '최고예요!' : rating === 4 ? '좋아요' : rating === 3 ? '괜찮아요' : rating === 2 ? '별로예요' : '아쉬워요'}
              </p>
            )}
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">의견 입력</label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="추천 서비스에 대한 의견을 남겨주세요"
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-11"
          >
            {isSubmitting ? '전송 중...' : '전송하기'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
