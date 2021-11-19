import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = () => {
  return (
    <div>
      <Input
        className="focus:border-indigo-500 focus:ring-indigo-500"
        fluid
        icon="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
