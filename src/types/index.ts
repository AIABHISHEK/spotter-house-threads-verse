
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  tags: string[];
  images: string[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  isNew: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  size: string;
  customText?: string;
  customImage?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: Address;
  paymentMethod: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Review {
  id: string;
  productId: number;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface CommunityDesign {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  image: string;
  title: string;
  description: string;
  likes: number;
  createdAt: string;
  forSale: boolean;
  price?: number;
}
