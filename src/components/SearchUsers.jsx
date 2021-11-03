import React, { useState, useEffect } from 'react';

const SearchUsers = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api?nat=en="${query}"`)
      .then((response) => response.json())
      .then((data) => setResults(data.items));
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((result) => (
          <li>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUsers;

/*
const RandomUser = () => {

const getUser = () => {
          // Send the request
    axios
        .get('https://randomuser.me/api?nat=en')
            // Extract the DATA from the received response
        .then((response) => response.data)
            // Use this data to update the state
        .then((data) => {
            setUser(data.results[0]);
            });
        };


export default RandomUser;
*/
