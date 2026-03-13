'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, RefreshCw, MessageSquarePlus, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MenuCard } from '@/components/recommend/menu-card'
import { FeedbackModal } from '@/components/recommend/feedback-modal'
import { generateRecommendations } from '@/lib/recommendation'
import type { RecommendationInput, RecommendedMenu } from '@/lib/types'

export default function ResultPage() {
  const router = useRouter()
  const [recommendations, setRecommendations] = useState<RecommendedMenu[]>([])
  const [input, setInput] = useState<RecommendationInput | null>(null)
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  useEffect(() => {
    // Get input from sessionStorage
    const storedInput = sessionStorage.getItem('recommendInput')
    
    if (!storedInput) {
      router.replace('/recommend')
      return
    }

    const parsedInput: RecommendationInput = JSON.parse(storedInput)
    setInput(parsedInput)
    
    // Generate recommendations
    const results = generateRecommendations(parsedInput)
    setRecommendations(results)
  }, [router])

  if (!input || recommendations.length === 0) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">로딩 중...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pb-28">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/recommend" className="p-1 -ml-1 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">추천 결과</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6 space-y-5">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">추천 메뉴 TOP 3</h2>
            <p className="text-sm text-muted-foreground">
              {input.timeSlot} 시간대 맞춤 추천
            </p>
          </div>
        </div>

        {/* Input Summary */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {input.timeSlot}
          </span>
          {input.preferredCategories.map((cat) => (
            <span 
              key={cat}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="space-y-4">
          {recommendations.map((menu, index) => (
            <MenuCard 
              key={menu.menu_id} 
              menu={menu} 
              rank={index + 1} 
            />
          ))}
        </div>

        {/* Encouragement Message */}
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground">
            추천이 도움이 되셨나요?<br />
            피드백을 남겨주시면 더 나은 추천을 제공해드립니다.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <div className="mx-auto max-w-md flex gap-3">
          <Button 
            variant="outline"
            onClick={() => router.push('/recommend')}
            className="flex-1 h-12"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            다시 추천받기
          </Button>
          <Button 
            onClick={() => setFeedbackOpen(true)}
            className="flex-1 h-12"
          >
            <MessageSquarePlus className="h-4 w-4 mr-2" />
            피드백 보내기
          </Button>
        </div>
      </div>

      {/* Feedback Modal */}
      <FeedbackModal 
        open={feedbackOpen} 
        onClose={() => setFeedbackOpen(false)} 
      />
    </main>
  )
}
