'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function SearchBar() {
  return (
    <div className="px-4 py-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          type="text"
          placeholder="음식점이나 메뉴를 검색하세요"
          className="pl-10 bg-muted border-0 h-11 text-sm placeholder:text-muted-foreground"
          readOnly
        />
      </div>
    </div>
  )
}
