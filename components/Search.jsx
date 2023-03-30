import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar cartas"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Search;
