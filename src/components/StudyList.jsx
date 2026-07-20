import StudyItem from './StudyItem';
import { useCallback, useMemo, useState } from 'react';

export default function StudyList({ items, selectedId, onSelect, category, keyword }) {
  const filteredData = useMemo(() => {
    return items.filter((item) => {
      const categoryMatch = category === 'all' || category === item.category;
      const keywordMatch = item.title.toLowerCase().includes(keyword.toLowerCase());
      return categoryMatch && keywordMatch;
    });
  }, [category, keyword]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const handleToggleFavorite = useCallback((id) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  }, []);

  const lists = filteredData.map((data) => (
    <li
      key={data.id}
      className={`card text-center ${selectedId === data.id ? 'active' : ''}`}
      onClick={() => {
        onSelect(data.id);
      }}
    >
      <StudyItem item={data} isFavorite={favoriteIds.includes(data.id)} onToggleFavorite={handleToggleFavorite} />
    </li>
  ));

  return (
    <>
      <h2 className="text-center">학습 목록</h2>
      <ul>{lists}</ul>
    </>
  );
}
