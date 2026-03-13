import type { RecommendationInput, RecommendedMenu, Category, TimeSlot, NearbyStore } from './types'
import { menus, menuRatings, timeBasedCategories, getStore, getMenuBestReview, getMenuNearbyStores } from './mock-data'

// Based on SequenceDiagram.png logic:
// 1. User clicks recommendation button
// 2. API queries past order/review data
// 3. AI model generates recommendations based on user data
// 4. Returns top recommendations with reasons

export function generateRecommendations(input: RecommendationInput): RecommendedMenu[] {
  const { timeSlot, recentCategories, preferredCategories } = input
  
  // Get time-appropriate categories
  const timeCategories = timeBasedCategories[timeSlot] || []
  
  // Score all menus
  const scoredMenus = menus.map(menu => {
    let score = 0
    const reasons: string[] = []
    
    // 1. Time-of-day match (weight: 20)
    if (timeCategories.includes(menu.category as Category)) {
      score += 20
      reasons.push('현재 시간대에 인기 있는 메뉴입니다.')
    }
    
    // 2. Preferred category match (weight: 40 - highest)
    if (preferredCategories.includes(menu.category as Category)) {
      score += 40
      reasons.push('선호하시는 카테고리의 메뉴입니다.')
    }
    
    // 3. Recent order category match (weight: 25)
    if (recentCategories.includes(menu.category as Category)) {
      score += 25
      reasons.push('최근 자주 주문한 카테고리와 유사한 메뉴입니다.')
    }
    
    // 4. High rating bonus (weight: 15)
    const rating = menuRatings[menu.menu_id]
    if (rating && rating.avgRating >= 4.7) {
      score += 15
      reasons.push('평점이 높은 인기 메뉴입니다.')
    }
    
    // 5. Popular menu bonus (based on review count)
    if (rating && rating.reviewCount >= 150) {
      score += 10
    }
    
    // Get store info
    const store = getStore(menu.business_num)
    
    // Select the most relevant reason
    const primaryReason = reasons.length > 0 
      ? reasons[0] 
      : '추천 알고리즘이 선정한 메뉴입니다.'
    
    // Get best review for this menu
    const bestReview = getMenuBestReview(menu.menu_id)
    
    // Get nearby stores for this menu
    const nearbyStoreData = getMenuNearbyStores(menu.menu_id)
    const nearbyStores: NearbyStore[] = nearbyStoreData.map(storeData => {
      const storeInfo = getStore(storeData.business_num)
      return {
        store: storeInfo!,
        distance: storeData.distance,
        avgRating: storeData.rating,
        reviewCount: storeData.reviewCount,
        deliveryTime: storeData.deliveryTime
      }
    })
    
    return {
      ...menu,
      store: store!,
      avgRating: rating?.avgRating || 4.0,
      reviewCount: rating?.reviewCount || 0,
      recommendReason: primaryReason,
      bestReview,
      nearbyStores,
      score
    }
  })
  
  // Sort by score and return top 3
  return scoredMenus
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

// Get user's recent order categories (simulated from mock data)
export function getUserRecentCategories(): Category[] {
  // Based on mock order data, user has ordered: 한식, 치킨, 중식, 분식, 샐러드
  return ['한식', '치킨', '중식', '분식', '샐러드']
}

// Determine current time slot
export function getCurrentTimeSlot(): TimeSlot {
  const hour = new Date().getHours()
  
  if (hour >= 6 && hour < 11) return '아침'
  if (hour >= 11 && hour < 15) return '점심'
  if (hour >= 15 && hour < 21) return '저녁'
  return '야식'
}
