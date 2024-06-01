export const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
    return (
      <div>
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => onSelect(genre)}
            style={{ color: genre === selectedGenre ? 'red' : 'black' }}
          >
            {genre}
          </button>
        ))}
      </div>
    )
  }