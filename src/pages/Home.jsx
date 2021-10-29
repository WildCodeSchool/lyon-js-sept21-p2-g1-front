import React, { useState } from 'react';

function Home() {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="bg-red-700">
      <h1>Home</h1>
      <input
        type="text"
        placeholder="hello"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Home;
