import data from '../../data/words.json';

export const GenreSelectionPage = () => {
  return (
    <section>
      <h2>Выберите любимый жанр</h2>
      <ul>
        {data.categories.map((category, index) => (
          <li key={index}>
            <button>{category.genre}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
