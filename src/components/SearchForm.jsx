import { useEffect, useRef, useState } from 'react';

export default function SearchForm({ keyword, onChange }) {
  const searchInputRef = useRef(null);
  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <section>
      <h2>검색</h2>
      <div className="row g-3">
        <div className="col-8">
          <input
            ref={searchInputRef}
            type="text"
            className="form-control"
            value={keyword}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            placeholder="학습 항목 검색"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-dark" onClick={handleFocusSearch}>
            검색창으로 이동
          </button>
        </div>
      </div>
    </section>
  );
}
