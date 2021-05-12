import React, {Component} from 'react';
import Player from "./Player";
import {Consumer} from "./context/Context";

class PlayersList extends Component {


    render() {
        return (
            <Consumer>
                {({players,actions})=>{
                    return (
                        <React.Fragment>
                            {players.map( (player,index) => {
                                const highScore = actions.getHighScore();
                                return (
                                        <Player
                                            key={player.id.toString()}
                                            index={index}
                                            isHighScore = {highScore === player.score}>
                                        </Player>
                                    );
                                }
                            )}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default PlayersList;
