/**Imported components and set routes, link and nav links */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import PhotoContainer from "./views/Photos";
import apiKey from "./config.js";
/**This function allows you to go back and forward using useHistory.
/**Allows users to search and be displayed as well and uses UseHistory and useLocation */
function App() {
  let history = useHistory();
  let location = useLocation();
  let [searchText, setSearchText] = React.useState("");
  return (
    <div>
      <div className="container">
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            history.push(`/search/${searchText}`);
            setSearchText("");
          }}
        >
          <input
            type="search"
            name="search"
            value={searchText}
            placeholder="Search"
            required
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button type="submit" className="search-button">
            <svg
              fill="#fff"
              height="24"
              viewBox="0 0 23 23"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>

        {/* Nav Link*/}
        <Nav />

        {/* Routing */}

        <Switch>
          <Route path="/search/:searchInput">
            <PhotoContainer
              apiKey={apiKey}
              search={location.pathname.split("/")[2]}
            />
          </Route>
          <Route path="/cats">
            <PhotoContainer apiKey={apiKey} search="cats" />
          </Route>
          <Route path="/dogs">
            <PhotoContainer apiKey={apiKey} search="dogs" />
          </Route>
          <Route path="/computers">
            <PhotoContainer apiKey={apiKey} search="computers" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
