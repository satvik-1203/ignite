import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { searchAPI } from "../api";
import GameCard from "./GameCard";

export default function SearchGames() {
  const searchQuery = useSelector((state) => state.Search);

  const [searchApiData, setSearchApiData] = useState();

  useEffect(() => {
    axios
      .get(searchAPI(searchQuery))
      .then((data) => setSearchApiData(data.data.results));
  }, [searchQuery]);

  return (
    <>
      <section className="searchQuery">
        <h1>Results found for {searchQuery}...</h1>
        <div className="gameCards">
          {searchApiData &&
            searchApiData.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </section>
    </>
  );
}
