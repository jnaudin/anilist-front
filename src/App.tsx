import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import { useGetGenresQuery } from "./generated/graphql";
import { Select } from "./ui/Select/Select";

function App() {
  const { loading, error, data: genresData } = useGetGenresQuery();
  const [genre, setGenre] = useState<string>("");

  useEffect(() => {
    if (genresData?.GenreCollection) {
      const genre: string = genresData!.GenreCollection![0] || "action";
      setGenre(genre);
    }
  }, [genresData, setGenre]);

  if (loading) return <p>Loading...</p>;
  if (error || !genresData?.GenreCollection) return <p>Error :(</p>;
  console.log(genresData);
  const genreOptions = genresData.GenreCollection.filter(
    (genre) =>
      !!genre && genre !== "Ecchi" && genre !== "Hentai" && genre !== "Horror"
  ).map((genre) => ({ label: genre!, value: genre! }));

  return (
    <div className="App">
      <header className="App-header">Manga List</header>
      <main>
        <Select
          variant="outlined"
          color="error"
          label="Genre"
          options={genreOptions}
          value={genre}
          onChange={(event: SelectChangeEvent<unknown>) =>
            setGenre(event.target.value as string)
          }
        />
      </main>
    </div>
  );
}

export default App;
