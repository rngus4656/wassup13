'use client'

import { categories } from '@/lib/mock-data'

export function CategoryGrid() {
  return (
    <section className="px-4 py-2">
      <div className="grid grid-cols-5 gap-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center gap-1.5 py-3 rounded-xl hover:bg-muted transition-colors"
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="text-xs font-medium text-foreground">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
