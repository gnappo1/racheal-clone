import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import MovieForm from "./MovieForm";
import MoviesContainer from "../containers/MoviesContainer";
import MoviesCard from "./MoviesCard";
import EditMovies from "./EditMovie";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/movies/new">
            <MovieForm />
          </Route>
          <Route path="/movies/:id/edit">
            <EditMovies />
          </Route>
          <Route path="/movies/:id">
            <MoviesCard />
          </Route>
          <Route path="/movies">
            <MoviesContainer />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
