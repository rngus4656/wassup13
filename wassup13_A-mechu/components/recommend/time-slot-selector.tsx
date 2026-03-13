'use client'

import { cn } from '@/lib/utils'
import type { TimeSlot } from '@/lib/types'
import { Sun, Coffee, Moon, Utensils } from 'lucide-react'

const timeSlots: { value: TimeSlot; label: string; icon: React.ElementType; description: string }[] = [
  { value: '아침', label: '아침', icon: Sun, description: '6:00 - 11:00' },
  { value: '점심', label: '점심', icon: Coffee, description: '11:00 - 15:00' },
  { value: '저녁', label: '저녁', icon: Utensils, description: '15:00 - 21:00' },
  { value: '야식', label: '야식', icon: Moon, description: '21:00 - 6:00' },
]

interface TimeSlotSelectorProps {
  selected: TimeSlot | null
  onSelect: (slot: TimeSlot) => void
}

export function TimeSlotSelector({ selected, onSelect }: TimeSlotSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-foreground">현재 시간대 선택</h3>
      <div className="grid grid-cols-4 gap-2">
        {timeSlots.map((slot) => {
          const isSelected = selected === slot.value
          return (
            <button
              key={slot.value}
              onClick={() => onSelect(slot.value)}
              className={cn(
                "flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all",
                isSelected 
                  ? "border-primary bg-primary/5 text-primary" 
                  : "border-border bg-card text-muted-foreground hover:border-primary/30"
              )}
            >
              <slot.icon className={cn("h-5 w-5", isSelected && "text-primary")} />
              <span className="text-sm font-medium">{slot.label}</span>
              <span className="text-[10px] opacity-70">{slot.description}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
