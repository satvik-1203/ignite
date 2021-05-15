import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FetchGames, searchGame } from "../actions/gameAction";

const Home = () => {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(FetchGames());
  }, []);
  const dispatch = useDispatch();
  const [searchState, setSearchState] = useState();

  return (
    <div>
      <h1>
        <input
          onChange={(e) => {
            setSearchState(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            dispatch(searchGame(searchState));
          }}
        >
          search
        </button>
      </h1>
    </div>
  );
};

export default Home;
