// ✅ src/components/SortSelector.tsx
import React from 'react';
import { Product } from '@/lib/utils';

interface SortSelectorProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  products: Product[];
  setSortedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// ✅ 정렬 함수: 컴포넌트 내부에서 직접 사용
const sortProducts = (products: Product[], sortOption: string): Product[] => {
  return [...products].sort((a, b) => {
    if (sortOption === 'ascPrice') return a.price - b.price;
    if (sortOption === 'descPrice') return b.price - a.price;
    if (sortOption === 'ascDate')
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    if (sortOption === 'descDate')
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    return 0;
  });
};

const SortSelector: React.FC<SortSelectorProps> = ({
  sortOption,
  setSortOption,
  products,
  setSortedProducts,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    setSortedProducts(sortProducts(products, newSortOption)); // ✅ 선택 시 즉시 정렬 적용
  };

  return (
    <div className="flex justify-between">
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="border p-2 rounded"
      >
        <option value="ascPrice">가격 낮은 순</option>
        <option value="descPrice">가격 높은 순</option>
        <option value="ascDate">최신 등록 순</option>
        <option value="descDate">등록 순</option>
      </select>
    </div>
  );
};

export default SortSelector;
