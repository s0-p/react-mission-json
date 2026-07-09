import './App.css';
import data from './data/data.json';
import StudyInfo from './components/StudyInfo';
import StudyList from './components/StudyList';
import { useState } from 'react';

function App() {
  console.log(data);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수 : {data.length}</p>
      <StudyInfo title={data[0].title} desc={data[0].desc} category={data[0].category} />
      <StudyList
        items={data}
        selectedId={selectedId}
        onSelect={(_selectedId) => {
          setSelectedId(_selectedId);
        }}
      />
    </>
  );
}

export default App;
