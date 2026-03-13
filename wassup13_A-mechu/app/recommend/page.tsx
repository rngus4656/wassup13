'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Sparkles, Check, History } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TimeSlotSelector } from '@/components/recommend/time-slot-selector'
import { CategorySelector } from '@/components/recommend/category-selector'
import { LoadingModal } from '@/components/recommend/loading-modal'
import { getUserRecentCategories, getCurrentTimeSlot } from '@/lib/recommendation'
import { categories } from '@/lib/mock-data'
import { cn } from '@/lib/utils'
import type { TimeSlot, Category } from '@/lib/types'

export default function RecommendPage() {
  const router = useRouter()
  const [timeSlot, setTimeSlot] = useState<TimeSlot | null>(getCurrentTimeSlot())
  const orderBasedCategories = getUserRecentCategories().slice(0, 3)
  const [recentCategories, setRecentCategories] = useState<Category[]>(orderBasedCategories)
  const [preferredCategories, setPreferredCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const canSubmit = timeSlot && preferredCategories.length > 0

  const toggleRecentCategory = (category: Category) => {
    if (recentCategories.includes(category)) {
      setRecentCategories(recentCategories.filter(c => c !== category))
    } else {
      if (recentCategories.length < 5) {
        setRecentCategories([...recentCategories, category])
      }
    }
  }

  const handleSubmit = async () => {
    if (!canSubmit) return

    setIsLoading(true)
    
    // Simulate AI processing time (1.5-2 seconds)
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 500))
    
    // Store input in sessionStorage for result page
    sessionStorage.setItem('recommendInput', JSON.stringify({
      timeSlot,
      recentCategories,
      preferredCategories
    }))
    
    router.push('/recommend/result')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" className="p-1 -ml-1 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">A-메추 AI 추천</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Intro */}
        <Card className="p-4 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">맞춤 메뉴 추천</h2>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                선호하는 음식 카테고리와 시간대를 선택하면<br />
                AI가 최적의 메뉴를 추천해드립니다.
              </p>
            </div>
          </div>
        </Card>

        {/* Time Slot Selection */}
        <TimeSlotSelector 
          selected={timeSlot} 
          onSelect={setTimeSlot} 
        />

        {/* Recent Categories (Selectable) */}
        <div className="space-y-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">최근 주문 카테고리</h3>
            <p className="text-xs text-muted-foreground mt-0.5">주문 기록 기반 + 추가 선택 가능 (최대 5개)</p>
          </div>
          
          {/* Order-based categories label */}
          {orderBasedCategories.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <History className="h-3.5 w-3.5" />
              <span>주문 기록: {orderBasedCategories.join(', ')}</span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = recentCategories.includes(cat.name)
              const isFromOrder = orderBasedCategories.includes(cat.name)
              return (
                <button
                  key={cat.name}
                  onClick={() => toggleRecentCategory(cat.name)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all",
                    isSelected
                      ? isFromOrder 
                        ? "bg-secondary text-foreground ring-2 ring-primary/30"
                        : "bg-secondary text-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  )}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  {isSelected && <Check className="h-3.5 w-3.5" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Preferred Categories */}
        <CategorySelector
          title="선호 음식 카테고리"
          description="오늘 먹고 싶은 카테고리를 선택하세요 (최대 3개)"
          selected={preferredCategories}
          onSelect={setPreferredCategories}
          maxSelect={3}
        />

        {/* Selected Summary */}
        {canSubmit && (
          <Card className="p-4 border-primary/20 bg-primary/5">
            <h4 className="text-sm font-semibold text-foreground mb-2">선택 요약</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>시간대: <span className="text-foreground font-medium">{timeSlot}</span></p>
              <p>선호 카테고리: <span className="text-foreground font-medium">{preferredCategories.join(', ')}</span></p>
            </div>
          </Card>
        )}
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <div className="mx-auto max-w-md">
          <Button 
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="w-full h-12 text-base font-semibold"
            size="lg"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            추천받기
          </Button>
        </div>
      </div>

      {/* Loading Modal */}
      <LoadingModal open={isLoading} />
    </main>
  )
}
