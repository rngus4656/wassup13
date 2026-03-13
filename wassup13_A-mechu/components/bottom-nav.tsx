'use client'

import { Home, Search, ClipboardList, Heart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: Home, label: '홈', href: '/' },
  { icon: Search, label: '검색', href: '#' },
  { icon: ClipboardList, label: '주문내역', href: '#' },
  { icon: Heart, label: '찜', href: '#' },
  { icon: User, label: '마이', href: '#' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-4 py-1.5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
