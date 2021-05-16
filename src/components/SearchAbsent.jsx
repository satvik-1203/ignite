import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchGames } from "../actions/gameAction";
import GameCard from "../components/GameCard";

export default function SearchAbsent() {
  const [popularGames, setPopularGames] = useState();
  const [upComingGames, setupComingGames] = useState();
  const [newGames, setnewGames] = useState();

  const AllGames = useSelector((state) => state.Game);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(FetchGames());
  }, []);

  useEffect(() => {
    setPopularGames(AllGames.popular);
    setupComingGames(AllGames.upcoming);
    setnewGames(AllGames.newGames);
  }, [AllGames]);
  return (
    <div>
      <section className="popularGames">
        <h1>Popular Games</h1>
        <div className="gameCards">
          {popularGames &&
            popularGames.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </section>
      <section className="newGames">
        <h1>New Games</h1>
        <div className="gameCards">
          {newGames &&
            newGames.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </section>
      <section className="upComingGames">
        <h1>Upcoming Games</h1>
        <div className="gameCards">
          {upComingGames &&
            upComingGames.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </section>
    </div>
  );
}
