'use client'

import Image from 'next/image'
import { ChevronRight, RotateCcw } from 'lucide-react'
import { orders, orderMenus, menus, stores } from '@/lib/mock-data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function RecentOrders() {
  // Get recent orders with menu details
  const recentOrders = orders.slice(0, 3).map(order => {
    const orderItems = orderMenus
      .filter(om => om.order_id === order.order_id)
      .map(om => menus.find(m => m.menu_id === om.menu_id))
      .filter(Boolean)
    
    const store = stores.find(s => s.business_num === order.business_num)
    
    return {
      ...order,
      items: orderItems,
      store
    }
  })

  return (
    <section className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-foreground">최근 주문</h2>
        <button className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          전체보기
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {recentOrders.map((order) => {
          const firstItem = order.items[0]
          if (!firstItem) return null
          
          return (
            <Card 
              key={order.order_id}
              className="p-3 border-0 shadow-sm"
            >
              <div className="flex gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={firstItem.menu_img}
                    alt={firstItem.menu_name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-foreground truncate">
                    {order.store?.store_name}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {order.items.map(item => item?.menu_name).join(', ')}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(order.order_time).toLocaleDateString('ko-KR', {
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-shrink-0 h-8 text-xs"
                >
                  <RotateCcw className="h-3 w-3 mr-1" />
                  재주문
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
