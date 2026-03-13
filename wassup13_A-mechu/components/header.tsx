'use client'

import { MapPin, Bell, Search } from 'lucide-react'
import { currentUser } from '@/lib/mock-data'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">{currentUser.address.split(' ').slice(0, 2).join(' ')}</p>
            <p className="text-xs text-muted-foreground truncate max-w-[180px]">{currentUser.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="검색">
            <Search className="h-5 w-5 text-foreground" />
          </button>
          <button className="p-2 hover:bg-muted rounded-full transition-colors relative" aria-label="알림">
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
        </div>
      </div>
    </header>
  )
}
