import React from 'react';
import Header from "./Header";
import AddPlayerForm from "./AddPlayerForm";
import PlayersList from "./PlayersList";

const Scoreboard = () =>{
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
            />
            <PlayersList/>
            <AddPlayerForm />
        </div>
    );
}

export default Scoreboard;
