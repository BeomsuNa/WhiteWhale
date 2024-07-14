import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { CartProduct } from '@/lib/utils';
import { db } from '@/config/firebase';

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct & { quantity: number }) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const auth = getAuth();

  // 로컬 스토리지 및 세션 스토리지 장바구니 불러오기
  useEffect(() => {
    const loadCart = () => {
      const user = auth.currentUser;
      if (user) {
        const sessionstoredCart = sessionStorage.getItem('cart');
        if (sessionstoredCart) {
          setCart(JSON.parse(sessionstoredCart));
        }
      } else {
        const localstoredCart = localStorage.getItem('cart');
        if (localstoredCart) {
          setCart(JSON.parse(localstoredCart));
        }
      }
    };

    loadCart();
    const unsubscribe = auth.onAuthStateChanged(loadCart);
    return () => unsubscribe();
  }, [auth]);

  // Firestore에서 장바구니 불러오기
  useEffect(() => {
    const fetchCart = async () => {
      const user = auth.currentUser;
      if (user) {
        const cartRef = doc(db, 'Carts', user.uid);
        const cartDoc = await getDoc(cartRef);
        if (cartDoc.exists()) {
          setCart(cartDoc.data().cart);
        }
      }
    };
    fetchCart();
  }, [auth]);

  const saveCart = (newCart: CartProduct[]) => {
    setCart(newCart);
    const user = auth.currentUser;
    if (user) {
      const cartRef = doc(db, 'Carts', user.uid);
      const resetCart = newCart.map(
        ({ createdAt, productQuantity, ...rest }) => rest,
      );
      // createdAt의 경우 Link to에서 받은 데이터를 기반으로 하므로 집어넣었음
      setDoc(cartRef, { cart: resetCart });
      sessionStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const addToCart = (product: CartProduct) => {
    const OrderProduct = cart.find(item => item.id === product.id);
    if (OrderProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item,
      );
      saveCart(updatedCart);
    } else {
      const updatedCart = [...cart, product];
      saveCart(updatedCart);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item,
    );
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
