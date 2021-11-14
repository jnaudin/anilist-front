import "./App.css";
import { useGetGenresQuery } from "./generated/graphql";

function App() {
  const { loading, error, data: genresData } = useGetGenresQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(genresData);

  return (
    <div className="App">
      <header className="App-header">Manga List</header>
    </div>
  );
}

export default App;
