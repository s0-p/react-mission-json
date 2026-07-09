import './App.css';
import data from './data/data.json';

function App() {
  console.log(data);
  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수 : {data.length}</p>
    </>
  );
}

export default App;
