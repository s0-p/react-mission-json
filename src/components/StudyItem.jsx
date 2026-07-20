export default function StudyItem({ item, isFavorite, onToggleFavorite }) {
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{`${item.id}. ${item.title}`}</h5>
        <p className="card-text">{item.desc}</p>
        <p className="card-text">분류 : {item.category}</p>
        {/* {selectedId === data.id && <p>선택된 항목입니다.</p>} */}
      </div>
      <button
        onClick={() => {
          onToggleFavorite(item.id);
        }}
      >
        {`${isFavorite ? '★ 즐겨찾기 해제' : '☆ 즐겨찾기'}`}
      </button>
    </>
  );
}
