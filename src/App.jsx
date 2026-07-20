import './App.css';
import data from './data/data.json';
import StudyItem from './components/StudyItem';
import StudyList from './components/StudyList';
import Filter from './components/CategoryFilter';
import SearchForm from './components/SearchForm';
import { useRef, useState } from 'react';

function App() {
  console.log(data);
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState('all');
  const [keyword, setKeyword] = useState('');
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="text-center">
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수 : {data.length}</p>
      <p>App 렌더링 횟수: {renderCount.current}</p>
      <SearchForm
        keyword={keyword}
        onChange={(keyword) => {
          setKeyword(keyword);
        }}
      />
      <Filter
        onSelect={(option) => {
          setCategory(option);
        }}
      />
      <StudyList
        items={data}
        selectedId={selectedId}
        onSelect={(_selectedId) => {
          setSelectedId(_selectedId);
        }}
        category={category}
        keyword={keyword}
      />
    </div>
  );
}

export default App;
