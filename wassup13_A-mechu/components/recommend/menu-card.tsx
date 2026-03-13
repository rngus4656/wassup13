'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, MapPin, Clock, ChevronDown, ChevronUp, Quote, Store } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { RecommendedMenu } from '@/lib/types'

interface MenuCardProps {
  menu: RecommendedMenu
  rank: number
}

export function MenuCard({ menu, rank }: MenuCardProps) {
  const [showStores, setShowStores] = useState(false)
  
  const nearbyStores = menu.nearbyStores || []
  const bestReview = menu.bestReview || '맛있어요!'
  
  const rankColors = {
    1: 'from-yellow-400 to-yellow-500',
    2: 'from-gray-300 to-gray-400',
    3: 'from-amber-600 to-amber-700'
  }

  return (
    <Card className="overflow-hidden border-0 shadow-md">
      {/* Image with Rank Badge */}
      <div className="relative aspect-[16/9]">
        <Image
          src={menu.menu_img}
          alt={menu.menu_name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority={rank === 1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className={`absolute top-3 left-3 w-8 h-8 rounded-full bg-gradient-to-br ${rankColors[rank as keyof typeof rankColors] || rankColors[3]} flex items-center justify-center shadow-lg`}>
          <span className="text-white font-bold text-sm">{rank}</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-block px-2 py-0.5 bg-white/90 text-foreground text-xs font-medium rounded-full">
            {menu.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Menu Info */}
        <div>
          <h3 className="text-lg font-bold text-foreground">{menu.menu_name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{menu.menu_info}</p>
        </div>

        {/* Best Review (한줄 리뷰) */}
        <div className="p-3 bg-secondary/50 rounded-lg">
          <div className="flex gap-2">
            <Quote className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              {bestReview}
            </p>
          </div>
        </div>

        {/* Rating & Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">{menu.avgRating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">({menu.reviewCount})</span>
          </div>
          <span className="text-lg font-bold text-primary">
            {menu.price.toLocaleString()}원
          </span>
        </div>

        {/* Nearby Stores Toggle */}
        {nearbyStores.length > 0 && (
          <button
            onClick={() => setShowStores(!showStores)}
            className="w-full flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                내 주변 가게 {nearbyStores.length}곳
              </span>
            </div>
            {showStores ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        )}

        {/* Nearby Stores List */}
        {showStores && nearbyStores.length > 0 && (
          <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
            {nearbyStores.map((nearbyStore, index) => (
              <div 
                key={nearbyStore.store.business_num}
                className={cn(
                  "p-3 rounded-lg border transition-all",
                  index === 0 ? "border-primary/30 bg-primary/5" : "border-border bg-card"
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {index === 0 && (
                        <span className="px-1.5 py-0.5 bg-primary text-primary-foreground text-[10px] font-semibold rounded">
                          최근접
                        </span>
                      )}
                      <span className="font-medium text-foreground text-sm">
                        {nearbyStore.store.store_name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{nearbyStore.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{nearbyStore.deliveryTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-foreground">
                        {nearbyStore.avgRating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      리뷰 {nearbyStore.reviewCount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

