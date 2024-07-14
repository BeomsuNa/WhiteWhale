import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProductCategoryContextType {
  category: string | null;
  setCategory: (category: string | null) => void;
}
const ProductCategoryContext = createContext<
  ProductCategoryContextType | undefined
>(undefined);

export const ProductCategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = useState<string | null>(null);
  return (
    <ProductCategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </ProductCategoryContext.Provider>
  );
};

export const useProductCategory = (): ProductCategoryContextType => {
  const context = useContext(ProductCategoryContext);
  if (context === undefined) {
    throw new Error(
      'useProductCategory must be used within a ProductCategoryProvider',
    );
  }
  return context;
};
