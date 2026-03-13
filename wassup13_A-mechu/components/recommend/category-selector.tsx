'use client'

import { cn } from '@/lib/utils'
import type { Category } from '@/lib/types'
import { categories } from '@/lib/mock-data'
import { Check } from 'lucide-react'

interface CategorySelectorProps {
  title: string
  description?: string
  selected: Category[]
  onSelect: (categories: Category[]) => void
  maxSelect?: number
}

export function CategorySelector({ 
  title, 
  description,
  selected, 
  onSelect,
  maxSelect 
}: CategorySelectorProps) {
  const toggleCategory = (category: Category) => {
    if (selected.includes(category)) {
      onSelect(selected.filter(c => c !== category))
    } else {
      if (maxSelect && selected.length >= maxSelect) {
        // Replace the first selected item
        onSelect([...selected.slice(1), category])
      } else {
        onSelect([...selected, category])
      }
    }
  }

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selected.includes(category.name)
          return (
            <button
              key={category.name}
              onClick={() => toggleCategory(category.name)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all",
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              {isSelected && <Check className="h-3.5 w-3.5" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
