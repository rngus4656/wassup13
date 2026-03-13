import type { User, Store, Menu, Order, OrderMenu, Review, Category } from './types'

// Demo User
export const currentUser: User = {
  user_id: 1,
  nickname: '맛집탐험가',
  tel: '010-1234-5678',
  email: 'foodie@example.com',
  address: '서울시 강남구 테헤란로 123',
  user_grade: 'GOLD',
  signup_date: '2024-01-15',
  point: 5200
}

// Stores (6개)
export const stores: Store[] = [
  {
    business_num: 'ST001',
    store_name: '맛있는 한식당',
    tel: '02-1234-5678',
    delivery_type: '배달/포장',
    address: '서울시 강남구 역삼동 123-45',
    min_pay: 15000
  },
  {
    business_num: 'ST002',
    store_name: '황금짬뽕',
    tel: '02-2345-6789',
    delivery_type: '배달',
    address: '서울시 강남구 삼성동 234-56',
    min_pay: 18000
  },
  {
    business_num: 'ST003',
    store_name: '스시 오마카세',
    tel: '02-3456-7890',
    delivery_type: '배달/포장',
    address: '서울시 서초구 서초동 345-67',
    min_pay: 25000
  },
  {
    business_num: 'ST004',
    store_name: '바삭치킨',
    tel: '02-4567-8901',
    delivery_type: '배달',
    address: '서울시 강남구 논현동 456-78',
    min_pay: 19000
  },
  {
    business_num: 'ST005',
    store_name: '이탈리안 피자',
    tel: '02-5678-9012',
    delivery_type: '배달/포장',
    address: '서울시 송파구 잠실동 567-89',
    min_pay: 22000
  },
  {
    business_num: 'ST006',
    store_name: '달콤 디저트',
    tel: '02-6789-0123',
    delivery_type: '배달',
    address: '서울시 마포구 합정동 678-90',
    min_pay: 12000
  },
  {
    business_num: 'ST007',
    store_name: '엄마손 분식',
    tel: '02-7890-1234',
    delivery_type: '배달/포장',
    address: '서울시 강남구 청담동 789-01',
    min_pay: 10000
  },
  {
    business_num: 'ST008',
    store_name: '그린 샐러드',
    tel: '02-8901-2345',
    delivery_type: '배달',
    address: '서울시 강남구 신사동 890-12',
    min_pay: 14000
  }
]

// Menus (15+ items)
export const menus: Menu[] = [
  // 한식
  {
    menu_id: 1,
    business_num: 'ST001',
    menu_name: '돼지불백정식',
    menu_info: '매콤달콤한 돼지불백과 밥, 반찬 구성',
    menu_img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    category: '한식',
    price: 12000
  },
  {
    menu_id: 2,
    business_num: 'ST001',
    menu_name: '된장찌개백반',
    menu_info: '구수한 된장찌개와 갓 지은 밥',
    menu_img: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop',
    category: '한식',
    price: 9000
  },
  {
    menu_id: 3,
    business_num: 'ST001',
    menu_name: '제육볶음정식',
    menu_info: '불맛 가득 제육볶음과 신선한 반찬',
    menu_img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop',
    category: '한식',
    price: 11000
  },
  // 중식
  {
    menu_id: 4,
    business_num: 'ST002',
    menu_name: '짬뽕',
    menu_info: '불맛 가득 얼큰한 해물짬뽕',
    menu_img: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    category: '중식',
    price: 9000
  },
  {
    menu_id: 5,
    business_num: 'ST002',
    menu_name: '탕수육',
    menu_info: '바삭바삭 찹쌀탕수육 (중)',
    menu_img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    category: '중식',
    price: 18000
  },
  {
    menu_id: 6,
    business_num: 'ST002',
    menu_name: '짜장면',
    menu_info: '춘장의 깊은 맛이 느껴지는 짜장면',
    menu_img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop',
    category: '중식',
    price: 7000
  },
  // 일식
  {
    menu_id: 7,
    business_num: 'ST003',
    menu_name: '연어 사시미',
    menu_info: '신선한 노르웨이 연어 15pcs',
    menu_img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: '일식',
    price: 28000
  },
  {
    menu_id: 8,
    business_num: 'ST003',
    menu_name: '모듬초밥',
    menu_info: '셰프 추천 모듬초밥 12pcs',
    menu_img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop',
    category: '일식',
    price: 32000
  },
  // 치킨
  {
    menu_id: 9,
    business_num: 'ST004',
    menu_name: '후라이드치킨',
    menu_info: '바삭바삭 황금빛 후라이드',
    menu_img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: '치킨',
    price: 19000
  },
  {
    menu_id: 10,
    business_num: 'ST004',
    menu_name: '양념치킨',
    menu_info: '매콤달콤 시그니처 양념치킨',
    menu_img: 'https://images.unsplash.com/photo-1575932444877-5106bee2a599?w=400&h=300&fit=crop',
    category: '치킨',
    price: 20000
  },
  {
    menu_id: 11,
    business_num: 'ST004',
    menu_name: '간장치킨',
    menu_info: '달콤짭짤 수제 간장치킨',
    menu_img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop',
    category: '치킨',
    price: 20000
  },
  // 피자
  {
    menu_id: 12,
    business_num: 'ST005',
    menu_name: '페퍼로니 피자',
    menu_info: '클래식 페퍼로니 라지 사이즈',
    menu_img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: '피자',
    price: 24000
  },
  {
    menu_id: 13,
    business_num: 'ST005',
    menu_name: '콤비네이션 피자',
    menu_info: '풍성한 토핑의 콤비네이션',
    menu_img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: '피자',
    price: 26000
  },
  // 디저트
  {
    menu_id: 14,
    business_num: 'ST006',
    menu_name: '티라미수',
    menu_info: '이탈리안 정통 티라미수',
    menu_img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    category: '디저트',
    price: 8000
  },
  {
    menu_id: 15,
    business_num: 'ST006',
    menu_name: '치즈케이크',
    menu_info: '부드러운 뉴욕 치즈케이크',
    menu_img: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop',
    category: '디저트',
    price: 7500
  },
  // 분식
  {
    menu_id: 16,
    business_num: 'ST007',
    menu_name: '떡볶이',
    menu_info: '매콤달콤 국물 떡볶이',
    menu_img: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=400&h=300&fit=crop',
    category: '분식',
    price: 6000
  },
  {
    menu_id: 17,
    business_num: 'ST007',
    menu_name: '김밥',
    menu_info: '야채 듬뿍 참치김밥 2줄',
    menu_img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    category: '분식',
    price: 5000
  },
  {
    menu_id: 18,
    business_num: 'ST007',
    menu_name: '라볶이',
    menu_info: '라면사리 + 떡볶이 조합',
    menu_img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop',
    category: '분식',
    price: 7000
  },
  // 샐러드
  {
    menu_id: 19,
    business_num: 'ST008',
    menu_name: '닭가슴살 샐러드',
    menu_info: '고단백 닭가슴살과 신선한 야채',
    menu_img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    category: '샐러드',
    price: 11000
  },
  {
    menu_id: 20,
    business_num: 'ST008',
    menu_name: '연어 포케',
    menu_info: '하와이안 스타일 연어 포케볼',
    menu_img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    category: '샐러드',
    price: 14000
  },
  // 야식
  {
    menu_id: 21,
    business_num: 'ST004',
    menu_name: '치킨 + 맥주세트',
    menu_info: '후라이드 반 + 양념 반 + 맥주 2캔',
    menu_img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop',
    category: '야식',
    price: 28000
  },
  {
    menu_id: 22,
    business_num: 'ST007',
    menu_name: '순대볶음',
    menu_info: '쫄깃한 순대와 야채볶음',
    menu_img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    category: '야식',
    price: 15000
  }
]

// Orders (다양한 시간대)
export const orders: Order[] = [
  {
    order_id: 1,
    user_id: 1,
    business_num: 'ST001',
    order_status: 'completed',
    pay_opt: 'card',
    delivery_req: '문 앞에 놓아주세요',
    order_time: '2025-03-10T12:30:00',
    paid_amount: 12000
  },
  {
    order_id: 2,
    user_id: 1,
    business_num: 'ST004',
    order_status: 'completed',
    pay_opt: 'card',
    delivery_req: '벨 누르지 마세요',
    order_time: '2025-03-09T19:00:00',
    paid_amount: 19000
  },
  {
    order_id: 3,
    user_id: 1,
    business_num: 'ST002',
    order_status: 'completed',
    pay_opt: 'card',
    delivery_req: '',
    order_time: '2025-03-08T12:00:00',
    paid_amount: 27000
  },
  {
    order_id: 4,
    user_id: 1,
    business_num: 'ST007',
    order_status: 'completed',
    pay_opt: 'card',
    delivery_req: '맛있게 부탁드려요',
    order_time: '2025-03-07T23:30:00',
    paid_amount: 13000
  },
  {
    order_id: 5,
    user_id: 1,
    business_num: 'ST008',
    order_status: 'completed',
    pay_opt: 'card',
    delivery_req: '',
    order_time: '2025-03-06T08:00:00',
    paid_amount: 11000
  }
]

// Order Menus
export const orderMenus: OrderMenu[] = [
  { ordermenu_id: 1, order_id: 1, menu_id: 1, quantity: 1 },
  { ordermenu_id: 2, order_id: 2, menu_id: 9, quantity: 1 },
  { ordermenu_id: 3, order_id: 3, menu_id: 4, quantity: 1 },
  { ordermenu_id: 4, order_id: 3, menu_id: 5, quantity: 1 },
  { ordermenu_id: 5, order_id: 4, menu_id: 16, quantity: 1 },
  { ordermenu_id: 6, order_id: 4, menu_id: 17, quantity: 2 },
  { ordermenu_id: 7, order_id: 5, menu_id: 19, quantity: 1 }
]

// Reviews
export const reviews: Review[] = [
  {
    review_id: 1,
    user_id: 1,
    order_id: 1,
    review_txt: '고기가 신선하고 맛있어요! 양도 푸짐합니다.',
    created_at: '2025-03-10',
    rating: 5
  },
  {
    review_id: 2,
    user_id: 1,
    order_id: 2,
    review_txt: '항상 바삭하게 잘 튀겨주셔서 좋아요.',
    created_at: '2025-03-09',
    rating: 4
  },
  {
    review_id: 3,
    user_id: 1,
    order_id: 3,
    review_txt: '짬뽕 국물이 시원하고 탕수육은 바삭해요!',
    created_at: '2025-03-08',
    rating: 5
  },
  {
    review_id: 4,
    user_id: 1,
    order_id: 4,
    review_txt: '야식으로 최고에요. 떡볶이 양이 많아요.',
    created_at: '2025-03-07',
    rating: 4
  },
  {
    review_id: 5,
    user_id: 1,
    order_id: 5,
    review_txt: '아침에 먹기 딱 좋은 샐러드입니다.',
    created_at: '2025-03-06',
    rating: 5
  },
  // Additional reviews for other menus (simulated other users)
  { review_id: 6, user_id: 2, order_id: 6, review_txt: '맛있어요!', created_at: '2025-03-05', rating: 5 },
  { review_id: 7, user_id: 3, order_id: 7, review_txt: '배달이 빨라요', created_at: '2025-03-04', rating: 4 },
  { review_id: 8, user_id: 4, order_id: 8, review_txt: '재주문 의사 있어요', created_at: '2025-03-03', rating: 5 },
  { review_id: 9, user_id: 5, order_id: 9, review_txt: '가성비 좋습니다', created_at: '2025-03-02', rating: 4 },
  { review_id: 10, user_id: 6, order_id: 10, review_txt: '친절해요', created_at: '2025-03-01', rating: 5 }
]

// Best reviews for each menu (한줄 리뷰)
export const menuBestReviews: Record<number, string> = {
  1: '고기가 부드럽고 양이 많아요! 혼밥하기 딱 좋습니다.',
  2: '어머니가 끓여주시는 된장찌개 맛이에요.',
  3: '매콤한 게 밥도둑이네요. 반찬도 깔끔해요!',
  4: '국물이 시원하고 해물이 신선해요. 면 양도 많아요.',
  5: '바삭바삭 소스도 맛있어요! 가족들이 좋아합니다.',
  6: '춘장 맛이 깊어요. 양파 절임이랑 먹으면 최고!',
  7: '연어가 입에서 녹아요. 신선도가 다릅니다!',
  8: '밥알 하나하나 살아있어요. 가격이 조금 있지만 만족해요.',
  9: '바삭함이 오래가요! 배달 와도 눅눅하지 않아요.',
  10: '양념이 달지 않고 적당해요. 맛집 인정합니다.',
  11: '간장 특유의 달콤짭조름한 맛이 좋아요.',
  12: '도우가 쫄깃하고 페퍼로니가 두툼해요!',
  13: '토핑이 정말 푸짐해요. 가성비 최고!',
  14: '커피 맛이 진해서 어른 입맛에 딱이에요.',
  15: '부드럽고 진해요. 디저트로 완벽해요!',
  16: '떡이 쫄깃쫄깃! 국물 떡볶이 맛집이에요.',
  17: '재료가 신선해요. 밥 양도 많아서 든든해요.',
  18: '라면+떡볶이 조합 실패가 없죠!',
  19: '닭가슴살이 촉촉해요. 다이어트 중인데 만족!',
  20: '연어가 신선하고 양이 많아요. 점심으로 딱이에요.',
  21: '치킨도 맛있고 맥주까지! 가성비 갑이에요.',
  22: '순대가 쫄깃하고 야채도 아삭해요. 야식으로 최고!'
}

// Multiple stores selling same menu (for nearby stores feature)
export const menuStores: Record<number, { business_num: string; distance: string; deliveryTime: string; rating: number; reviewCount: number }[]> = {
  1: [
    { business_num: 'ST001', distance: '0.8km', deliveryTime: '25-35분', rating: 4.8, reviewCount: 128 },
    { business_num: 'ST009', distance: '1.2km', deliveryTime: '30-40분', rating: 4.6, reviewCount: 89 },
    { business_num: 'ST010', distance: '2.1km', deliveryTime: '35-45분', rating: 4.5, reviewCount: 67 }
  ],
  2: [
    { business_num: 'ST001', distance: '0.8km', deliveryTime: '25-35분', rating: 4.5, reviewCount: 95 },
    { business_num: 'ST009', distance: '1.2km', deliveryTime: '30-40분', rating: 4.3, reviewCount: 72 },
    { business_num: 'ST010', distance: '2.1km', deliveryTime: '35-45분', rating: 4.4, reviewCount: 58 }
  ],
  3: [
    { business_num: 'ST001', distance: '0.8km', deliveryTime: '25-35분', rating: 4.7, reviewCount: 112 },
    { business_num: 'ST009', distance: '1.2km', deliveryTime: '30-40분', rating: 4.5, reviewCount: 78 },
    { business_num: 'ST010', distance: '2.1km', deliveryTime: '35-45분', rating: 4.6, reviewCount: 45 }
  ],
  4: [
    { business_num: 'ST002', distance: '1.0km', deliveryTime: '30-40분', rating: 4.6, reviewCount: 203 },
    { business_num: 'ST011', distance: '1.5km', deliveryTime: '35-45분', rating: 4.4, reviewCount: 156 },
    { business_num: 'ST012', distance: '2.3km', deliveryTime: '40-50분', rating: 4.3, reviewCount: 98 }
  ],
  5: [
    { business_num: 'ST002', distance: '1.0km', deliveryTime: '30-40분', rating: 4.9, reviewCount: 187 },
    { business_num: 'ST011', distance: '1.5km', deliveryTime: '35-45분', rating: 4.7, reviewCount: 145 },
    { business_num: 'ST012', distance: '2.3km', deliveryTime: '40-50분', rating: 4.5, reviewCount: 89 }
  ],
  6: [
    { business_num: 'ST002', distance: '1.0km', deliveryTime: '30-40분', rating: 4.4, reviewCount: 156 },
    { business_num: 'ST011', distance: '1.5km', deliveryTime: '35-45분', rating: 4.2, reviewCount: 112 },
    { business_num: 'ST012', distance: '2.3km', deliveryTime: '40-50분', rating: 4.3, reviewCount: 78 }
  ],
  7: [
    { business_num: 'ST003', distance: '1.3km', deliveryTime: '30-40분', rating: 4.8, reviewCount: 89 },
    { business_num: 'ST013', distance: '1.8km', deliveryTime: '35-45분', rating: 4.6, reviewCount: 67 },
    { business_num: 'ST014', distance: '2.5km', deliveryTime: '40-50분', rating: 4.5, reviewCount: 45 }
  ],
  8: [
    { business_num: 'ST003', distance: '1.3km', deliveryTime: '30-40분', rating: 4.9, reviewCount: 76 },
    { business_num: 'ST013', distance: '1.8km', deliveryTime: '35-45분', rating: 4.7, reviewCount: 58 },
    { business_num: 'ST014', distance: '2.5km', deliveryTime: '40-50분', rating: 4.6, reviewCount: 42 }
  ],
  9: [
    { business_num: 'ST004', distance: '0.5km', deliveryTime: '20-30분', rating: 4.7, reviewCount: 342 },
    { business_num: 'ST015', distance: '1.1km', deliveryTime: '25-35분', rating: 4.5, reviewCount: 267 },
    { business_num: 'ST016', distance: '1.9km', deliveryTime: '30-40분', rating: 4.4, reviewCount: 198 }
  ],
  10: [
    { business_num: 'ST004', distance: '0.5km', deliveryTime: '20-30분', rating: 4.6, reviewCount: 298 },
    { business_num: 'ST015', distance: '1.1km', deliveryTime: '25-35분', rating: 4.4, reviewCount: 234 },
    { business_num: 'ST016', distance: '1.9km', deliveryTime: '30-40분', rating: 4.3, reviewCount: 187 }
  ],
  11: [
    { business_num: 'ST004', distance: '0.5km', deliveryTime: '20-30분', rating: 4.5, reviewCount: 245 },
    { business_num: 'ST015', distance: '1.1km', deliveryTime: '25-35분', rating: 4.3, reviewCount: 189 },
    { business_num: 'ST016', distance: '1.9km', deliveryTime: '30-40분', rating: 4.2, reviewCount: 156 }
  ],
  12: [
    { business_num: 'ST005', distance: '1.5km', deliveryTime: '35-45분', rating: 4.7, reviewCount: 178 },
    { business_num: 'ST017', distance: '2.0km', deliveryTime: '40-50분', rating: 4.5, reviewCount: 134 },
    { business_num: 'ST018', distance: '2.8km', deliveryTime: '45-55분', rating: 4.4, reviewCount: 98 }
  ],
  13: [
    { business_num: 'ST005', distance: '1.5km', deliveryTime: '35-45분', rating: 4.8, reviewCount: 156 },
    { business_num: 'ST017', distance: '2.0km', deliveryTime: '40-50분', rating: 4.6, reviewCount: 123 },
    { business_num: 'ST018', distance: '2.8km', deliveryTime: '45-55분', rating: 4.5, reviewCount: 89 }
  ],
  14: [
    { business_num: 'ST006', distance: '2.2km', deliveryTime: '40-50분', rating: 4.6, reviewCount: 134 },
    { business_num: 'ST019', distance: '2.8km', deliveryTime: '45-55분', rating: 4.4, reviewCount: 98 },
    { business_num: 'ST020', distance: '3.2km', deliveryTime: '50-60분', rating: 4.3, reviewCount: 67 }
  ],
  15: [
    { business_num: 'ST006', distance: '2.2km', deliveryTime: '40-50분', rating: 4.7, reviewCount: 112 },
    { business_num: 'ST019', distance: '2.8km', deliveryTime: '45-55분', rating: 4.5, reviewCount: 89 },
    { business_num: 'ST020', distance: '3.2km', deliveryTime: '50-60분', rating: 4.4, reviewCount: 56 }
  ],
  16: [
    { business_num: 'ST007', distance: '0.6km', deliveryTime: '15-25분', rating: 4.5, reviewCount: 267 },
    { business_num: 'ST021', distance: '1.0km', deliveryTime: '20-30분', rating: 4.3, reviewCount: 198 },
    { business_num: 'ST022', distance: '1.7km', deliveryTime: '25-35분', rating: 4.2, reviewCount: 145 }
  ],
  17: [
    { business_num: 'ST007', distance: '0.6km', deliveryTime: '15-25분', rating: 4.4, reviewCount: 198 },
    { business_num: 'ST021', distance: '1.0km', deliveryTime: '20-30분', rating: 4.2, reviewCount: 156 },
    { business_num: 'ST022', distance: '1.7km', deliveryTime: '25-35분', rating: 4.1, reviewCount: 112 }
  ],
  18: [
    { business_num: 'ST007', distance: '0.6km', deliveryTime: '15-25분', rating: 4.6, reviewCount: 145 },
    { business_num: 'ST021', distance: '1.0km', deliveryTime: '20-30분', rating: 4.4, reviewCount: 112 },
    { business_num: 'ST022', distance: '1.7km', deliveryTime: '25-35분', rating: 4.3, reviewCount: 89 }
  ],
  19: [
    { business_num: 'ST008', distance: '0.9km', deliveryTime: '25-35분', rating: 4.8, reviewCount: 89 },
    { business_num: 'ST023', distance: '1.4km', deliveryTime: '30-40분', rating: 4.6, reviewCount: 67 },
    { business_num: 'ST024', distance: '2.0km', deliveryTime: '35-45분', rating: 4.5, reviewCount: 45 }
  ],
  20: [
    { business_num: 'ST008', distance: '0.9km', deliveryTime: '25-35분', rating: 4.7, reviewCount: 67 },
    { business_num: 'ST023', distance: '1.4km', deliveryTime: '30-40분', rating: 4.5, reviewCount: 54 },
    { business_num: 'ST024', distance: '2.0km', deliveryTime: '35-45분', rating: 4.4, reviewCount: 38 }
  ],
  21: [
    { business_num: 'ST004', distance: '0.5km', deliveryTime: '25-35분', rating: 4.9, reviewCount: 234 },
    { business_num: 'ST015', distance: '1.1km', deliveryTime: '30-40분', rating: 4.7, reviewCount: 189 },
    { business_num: 'ST016', distance: '1.9km', deliveryTime: '35-45분', rating: 4.6, reviewCount: 145 }
  ],
  22: [
    { business_num: 'ST007', distance: '0.6km', deliveryTime: '20-30분', rating: 4.5, reviewCount: 123 },
    { business_num: 'ST021', distance: '1.0km', deliveryTime: '25-35분', rating: 4.3, reviewCount: 98 },
    { business_num: 'ST022', distance: '1.7km', deliveryTime: '30-40분', rating: 4.2, reviewCount: 78 }
  ]
}

// Additional stores for nearby feature
export const additionalStores: Store[] = [
  { business_num: 'ST009', store_name: '고향 한식', tel: '02-9012-3456', delivery_type: '배달/포장', address: '서울시 강남구 대치동 123-45', min_pay: 14000 },
  { business_num: 'ST010', store_name: '정성 한상', tel: '02-0123-4567', delivery_type: '배달', address: '서울시 강남구 개포동 234-56', min_pay: 13000 },
  { business_num: 'ST011', store_name: '용문 중화요리', tel: '02-1234-5670', delivery_type: '배달/포장', address: '서울시 강남구 역삼동 345-67', min_pay: 17000 },
  { business_num: 'ST012', store_name: '만리장성', tel: '02-2345-6780', delivery_type: '배달', address: '서울시 서초구 반포동 456-78', min_pay: 16000 },
  { business_num: 'ST013', store_name: '사쿠라 스시', tel: '02-3456-7890', delivery_type: '배달/포장', address: '서울시 강남구 청담동 567-89', min_pay: 23000 },
  { business_num: 'ST014', store_name: '미소 초밥', tel: '02-4567-8901', delivery_type: '배달', address: '서울시 송파구 방이동 678-90', min_pay: 22000 },
  { business_num: 'ST015', store_name: '황금올리브', tel: '02-5678-9012', delivery_type: '배달/포장', address: '서울시 강남구 신사동 789-01', min_pay: 18000 },
  { business_num: 'ST016', store_name: '네네치킨', tel: '02-6789-0123', delivery_type: '배달', address: '서울시 강남구 논현동 890-12', min_pay: 17000 },
  { business_num: 'ST017', store_name: '도미노피자', tel: '02-7890-1234', delivery_type: '배달/포장', address: '서울시 송파구 잠실동 901-23', min_pay: 20000 },
  { business_num: 'ST018', store_name: '피자헛', tel: '02-8901-2345', delivery_type: '배달', address: '서울시 강남구 삼성동 012-34', min_pay: 21000 },
  { business_num: 'ST019', store_name: '파리바게뜨', tel: '02-9012-3450', delivery_type: '배달/포장', address: '서울시 강남구 역삼동 123-40', min_pay: 10000 },
  { business_num: 'ST020', store_name: '투썸플레이스', tel: '02-0123-4560', delivery_type: '배달', address: '서울시 서초구 서초동 234-50', min_pay: 11000 },
  { business_num: 'ST021', store_name: '신전떡볶이', tel: '02-1234-5600', delivery_type: '배달/포장', address: '서울시 강남구 청담동 345-60', min_pay: 9000 },
  { business_num: 'ST022', store_name: '죠스떡볶이', tel: '02-2345-6700', delivery_type: '배달', address: '서울시 강남구 논현동 456-70', min_pay: 8000 },
  { business_num: 'ST023', store_name: '샐러디', tel: '02-3456-7800', delivery_type: '배달/포장', address: '서울시 강남구 신사동 567-80', min_pay: 12000 },
  { business_num: 'ST024', store_name: '써브웨이', tel: '02-4567-8900', delivery_type: '배달', address: '서울시 강남구 역삼동 678-90', min_pay: 13000 }
]

// Menu ratings (pre-calculated averages)
export const menuRatings: Record<number, { avgRating: number; reviewCount: number }> = {
  1: { avgRating: 4.8, reviewCount: 128 },
  2: { avgRating: 4.5, reviewCount: 95 },
  3: { avgRating: 4.7, reviewCount: 112 },
  4: { avgRating: 4.6, reviewCount: 203 },
  5: { avgRating: 4.9, reviewCount: 187 },
  6: { avgRating: 4.4, reviewCount: 156 },
  7: { avgRating: 4.8, reviewCount: 89 },
  8: { avgRating: 4.9, reviewCount: 76 },
  9: { avgRating: 4.7, reviewCount: 342 },
  10: { avgRating: 4.6, reviewCount: 298 },
  11: { avgRating: 4.5, reviewCount: 245 },
  12: { avgRating: 4.7, reviewCount: 178 },
  13: { avgRating: 4.8, reviewCount: 156 },
  14: { avgRating: 4.6, reviewCount: 134 },
  15: { avgRating: 4.7, reviewCount: 112 },
  16: { avgRating: 4.5, reviewCount: 267 },
  17: { avgRating: 4.4, reviewCount: 198 },
  18: { avgRating: 4.6, reviewCount: 145 },
  19: { avgRating: 4.8, reviewCount: 89 },
  20: { avgRating: 4.7, reviewCount: 67 },
  21: { avgRating: 4.9, reviewCount: 234 },
  22: { avgRating: 4.5, reviewCount: 123 }
}

// Categories with icons
export const categories: { name: Category; icon: string }[] = [
  { name: '한식', icon: '🍚' },
  { name: '중식', icon: '🥡' },
  { name: '일식', icon: '🍣' },
  { name: '치킨', icon: '🍗' },
  { name: '피자', icon: '🍕' },
  { name: '디저트', icon: '🍰' },
  { name: '분식', icon: '🍜' },
  { name: '야식', icon: '🌙' },
  { name: '샐러드', icon: '🥗' }
]

// Time-based category recommendations
export const timeBasedCategories: Record<string, Category[]> = {
  '아침': ['샐러드', '한식', '디저트'],
  '점심': ['한식', '중식', '일식', '분식'],
  '저녁': ['치킨', '피자', '한식', '일식'],
  '야식': ['야식', '치킨', '피자', '분식']
}

// All stores combined
export const allStores: Store[] = [...stores, ...additionalStores]

// Helper function to get store by business_num
export function getStore(businessNum: string): Store | undefined {
  return allStores.find(s => s.business_num === businessNum)
}

// Helper function to get best review for a menu
export function getMenuBestReview(menuId: number): string {
  return menuBestReviews[menuId] || '맛있어요!'
}

// Helper function to get nearby stores for a menu
export function getMenuNearbyStores(menuId: number) {
  return menuStores[menuId] || []
}

// Helper function to get menu rating
export function getMenuRating(menuId: number): { avgRating: number; reviewCount: number } {
  return menuRatings[menuId] || { avgRating: 4.0, reviewCount: 0 }
}
