export const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
    return (
      <div data-component="genres">
        {genres.map(genre => (
          <button
            key={genre}
            data-testid={`genre-${genre}`}
            onClick={() => onSelect(genre)}
            style={{ color: genre === selectedGenre ? 'red' : 'black' }}
          >
            {genre}
          </button>
        ))}
      </div>
    )
  }