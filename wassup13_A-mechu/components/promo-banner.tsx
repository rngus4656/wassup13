'use client'

import { Sparkles } from 'lucide-react'
import Link from 'next/link'

export function PromoBanner() {
  return (
    <section className="px-4 py-3">
      <Link href="/recommend">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent p-5">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
              <span className="text-xs font-semibold text-primary-foreground/90 uppercase tracking-wide">
                AI 추천
              </span>
            </div>
            <h3 className="text-xl font-bold text-primary-foreground mb-1">
              A-메추 AI 메뉴 추천
            </h3>
            <p className="text-sm text-primary-foreground/80">
              나만의 맞춤 메뉴를 추천받아보세요
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary-foreground/10 rounded-full" />
          <div className="absolute right-8 -top-4 w-20 h-20 bg-primary-foreground/5 rounded-full" />
        </div>
      </Link>
    </section>
  )
}
