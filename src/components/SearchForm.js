import { useState } from 'react'

export const SearchForm = ({ initialQuery, onSearch }) => {
    const [query, setQuery] = useState(initialQuery || '')
  
    const handleInputChange = (event) => {
      setQuery(event.target.value)
    }
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        onSearch(query);
      }
    };
  
    const search = () => {
      onSearch(query)
    }
  
    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={search}>Search</button>
      </div>
    )
  }