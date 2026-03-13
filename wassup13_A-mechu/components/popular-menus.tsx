'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { menus, stores, menuRatings } from '@/lib/mock-data'
import { Card } from '@/components/ui/card'

export function PopularMenus() {
  // Get top rated menus
  const popularMenus = menus
    .map(menu => ({
      ...menu,
      store: stores.find(s => s.business_num === menu.business_num),
      rating: menuRatings[menu.menu_id]
    }))
    .sort((a, b) => (b.rating?.reviewCount || 0) - (a.rating?.reviewCount || 0))
    .slice(0, 6)

  return (
    <section className="px-4 py-3">
      <h2 className="text-lg font-bold text-foreground mb-3">인기 메뉴</h2>
      <div className="grid grid-cols-2 gap-3">
        {popularMenus.map((menu) => (
          <Card 
            key={menu.menu_id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={menu.menu_img}
                alt={menu.menu_name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm text-foreground truncate">{menu.menu_name}</h3>
              <p className="text-xs text-muted-foreground truncate">{menu.store?.store_name}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-sm text-foreground">
                  {menu.price.toLocaleString()}원
                </span>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-muted-foreground">
                    {menu.rating?.avgRating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
