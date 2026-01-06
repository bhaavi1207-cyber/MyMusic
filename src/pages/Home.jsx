import songs from "../data/songs";

function Home() {
  return (
    <div>
      <h2>Discover Songs</h2>
      {songs.map((song) => (
        <div key={song.id} style={{ marginBottom: "10px" }}>
          <strong>{song.title}</strong> - {song.artist}
        </div>
      ))}
    </div>
  );
}

export default Home;
