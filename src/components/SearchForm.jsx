import { useState } from 'react';

export default function SearchForm({ onChange }) {
  return (
    <input
      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
