export default function StudyList({ items, selectedId, onSelect }) {
  const dataList = items.map((item, index) => (
    <li
      key={item.id}
      className={`card text-center ${selectedId === item.id ? 'active' : ''}`}
      onClick={() => {
        onSelect(item.id);
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{`${index + 1}. ${item.title}`}</h5>
        <p className="card-text">{item.desc}</p>
        <p className="card-text">분류 : {item.category}</p>
        {selectedId === item.id && <p>선택된 항목입니다.</p>}
      </div>
    </li>
  ));
  console.log(dataList);
  return <ul>{dataList}</ul>;
}
