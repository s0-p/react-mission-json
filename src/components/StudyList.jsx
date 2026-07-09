export default function StudyList({ items, selectedId, onSelect, filterOption }) {
  const dataList = filterOption === 'all' ? items : items.filter((item) => filterOption === item.category);
  const lists = dataList.map((data, index) => (
    <li
      key={data.id}
      className={`card text-center ${selectedId === data.id ? 'active' : ''}`}
      onClick={() => {
        onSelect(data.id);
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{`${index + 1}. ${data.title}`}</h5>
        <p className="card-text">{data.desc}</p>
        <p className="card-text">분류 : {data.category}</p>
        {selectedId === data.id && <p>선택된 항목입니다.</p>}
      </div>
    </li>
  ));

  return (
    <>
      <h2 className="text-center">학습 목록</h2>
      <ul>{lists}</ul>
    </>
  );
}
