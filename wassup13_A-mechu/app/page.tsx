import { Header } from '@/components/header'
import { SearchBar } from '@/components/search-bar'
import { CategoryGrid } from '@/components/category-grid'
import { PromoBanner } from '@/components/promo-banner'
import { PopularMenus } from '@/components/popular-menus'
import { RecentOrders } from '@/components/recent-orders'
import { BottomNav } from '@/components/bottom-nav'

export default function HomePage() {
  return (
    <main className="pb-20">
      <Header />
      <SearchBar />
      <CategoryGrid />
      <PromoBanner />
      <RecentOrders />
      <PopularMenus />
      <BottomNav />
    </main>
  )
}
