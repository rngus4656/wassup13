// Based on ERD.png structure

export interface User {
  user_id: number
  nickname: string
  tel: string
  email: string
  address: string
  user_grade: string
  signup_date: string
  point: number
}

export interface Store {
  business_num: string
  store_name: string
  tel: string
  delivery_type: string
  address: string
  min_pay: number
}

export interface Menu {
  menu_id: number
  business_num: string
  menu_name: string
  menu_info: string
  menu_img: string
  category: string
  price: number
}

export interface Order {
  order_id: number
  user_id: number
  business_num: string
  order_status: string
  pay_opt: string
  delivery_req: string
  order_time: string
  paid_amount: number
}

export interface OrderMenu {
  ordermenu_id: number
  order_id: number
  menu_id: number
  quantity: number
}

export interface Review {
  review_id: number
  user_id: number
  order_id: number
  review_txt: string
  created_at: string
  rating: number
}

export type TimeSlot = '아침' | '점심' | '저녁' | '야식'

export type Category = '한식' | '중식' | '일식' | '치킨' | '피자' | '디저트' | '분식' | '야식' | '샐러드'

export interface RecommendationInput {
  timeSlot: TimeSlot
  recentCategories: Category[]
  preferredCategories: Category[]
}

export interface NearbyStore {
  store: Store
  distance: string
  avgRating: number
  reviewCount: number
  deliveryTime: string
}

export interface RecommendedMenu extends Menu {
  store: Store
  avgRating: number
  reviewCount: number
  recommendReason: string
  bestReview: string
  nearbyStores: NearbyStore[]
  score: number
}

export interface Feedback {
  rating: number
  comment: string
  timestamp: string
}
