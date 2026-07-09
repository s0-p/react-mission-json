export default function Filter({ onSelect }) {
  return (
    <div className="p-5">
      <h2 className="text-center">카테고리 필터</h2>
      <div className="row gap-3">
        <button
          className="btn btn-dark col-1"
          onClick={() => {
            onSelect('all');
          }}
        >
          전체
        </button>
        <button
          className="btn btn-dark col-1"
          onClick={() => {
            onSelect('concept');
          }}
        >
          concept
        </button>
        <button
          className="btn btn-dark col-1"
          onClick={() => {
            onSelect('library');
          }}
        >
          library
        </button>
        <button
          className="btn btn-dark col-1"
          onClick={() => {
            onSelect('hook');
          }}
        >
          hook
        </button>
      </div>
    </div>
  );
}
