import { type ClassValue, clsx } from 'clsx';
import { Timestamp } from 'firebase/firestore';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface User {
  nickname: string;
  isSeller: boolean;
}

export interface Product {
  createdAt: Timestamp;
  id: string;
  productCategory: string;
  productDescription: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  sellerId: number;
  updatedAt: Timestamp;
  imageUrl: string;
}

export interface FetchProductsResult {
  products: Product[];
  nextPage: any;
}

export interface ProductCard {
  id: string;
  productCategory: string;
  productName: string;
  productPrice: number;
  imageUrl: string;
  productQuantity?: number;
  updatedAt?: Timestamp;
}

export interface CartProduct extends ProductCard {
  quantity: number;
}

export interface postInfo {
  postcodeData: string;
}
