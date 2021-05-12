import React, {PureComponent} from 'react';
import Counter from './Counter';
import {Consumer} from "./context/Context";
import Icon from "./Icon";
class Player extends PureComponent {

    render(){
        const {index,isHighScore}  = this.props;
        return (
            <Consumer>
                {
                    ({actions,players}) => {
                        return (
                            <div className="player">
                                <span className="player-name">
                                    <button className="remove-player" onClick={() =>actions.removePlayer(players[index].id)}>✖</button>
                                    <Icon iconClassName ={isHighScore ? "is-high-score" : null } />
                                    { players[index].name }
                                </span>
                                      <Counter index={ index}/>
                            </div>
                        );
                    }
                }
            </Consumer>
        );
    }
}

export default Player;