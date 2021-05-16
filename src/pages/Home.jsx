import React, { useState, useEffect } from "react";
import SearchAbsent from "../components/SearchAbsent";
import { useSelector, useDispatch } from "react-redux";
import onChange from "../actions/search";
import SearchGames from "../components/SearchGames";

const Home = () => {
  const [search, setSearch] = useState("");

  const Search = useSelector((state) => state.Search);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (search === "") {
      dispatcher(onChange(""));
    }
  }, [search]);

  return (
    <>
      <nav>
        <div className="searchBox">
          <div className="search">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              className="searchInput"
            />
            <button
              onClick={() => {
                dispatcher(onChange(search));
              }}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      {!Search ? <SearchAbsent /> : <SearchGames />}
    </>
  );
};

export default Home;
