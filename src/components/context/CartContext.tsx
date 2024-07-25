import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
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

  // 계정 상태가 변경되었을 때 계정이 있으면 해당 데이터, 없으면 cart상태를 빈배열로 변경
  useEffect(() => {
    const handleAuthChange = async (user: User | null) => {
      if (user) {
        const cartRef = doc(db, 'Carts', user.uid);
        const cartDoc = await getDoc(cartRef);
        if (cartDoc.exists()) {
          setCart(cartDoc.data().cart || []);
        }
      } else {
        setCart([]);
      }
    };
    const unsubscribe = onAuthStateChanged(auth, handleAuthChange);
    return () => unsubscribe();
  }, [auth]);
  const saveCart = async (newCart: CartProduct[]) => {
    const user = auth.currentUser;
    if (user) {
      const cartRef = doc(db, 'Carts', user.uid);
      await setDoc(cartRef, { cart: newCart });
    } else {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
    setCart(newCart);
  };

  const addToCart = (product: CartProduct) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(
        item => item.id === product.id,
      );
      let updatedCart;
      if (existingProductIndex !== -1) {
        updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
      } else {
        updatedCart = [...prevCart, product];
      }
      const user = auth.currentUser;
      if (user) {
        const cartRef = doc(db, 'Carts', user.uid);
        setDoc(cartRef, { cart: updatedCart });
      } else {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }

      return updatedCart;
    });
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
