function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      {favorites.map((song, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{song.title}</strong> - {song.artist}
        </div>
      ))}
    </div>
  );
}

export default Favorites;
