import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query($id: Int) {
    # Define which variables will be used in the query (id)
    Media(id: $id, type: ANIME) {
      # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;

const variables = {
  id: 15125,
};

function App() {
  const { loading, error, data } = useQuery(query, { variables });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
