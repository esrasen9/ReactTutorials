import React,{Component} from 'react';
const ScoreboardContext = React.createContext();
export class Provider extends Component {
    state = {
        players: [
            {
                name: "Treasure",
                id: 2,
                score: 0,
            },
            {
                name: "Ashley",
                id: 3,
                score: 0,
            },
            {
                name: "James",
                id: 4,
                score: 0,
            }
        ],
    }

    prevPlayerId = 5;

    handleScoreChange = (index, delta) => {
        this.setState( prevState => {
            const updatedPlayers = [ ...prevState.players ];
            const updatedPlayer = { ...updatedPlayers[index] };
            updatedPlayer.score += delta;
            updatedPlayers[index] = updatedPlayer;
            return {
                players: updatedPlayers
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            };
        });
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    getHighScore = () => {
        const scores = this.state.players.map((player)=>player.score);
        const highScore = Math.max(...scores);
        if(highScore > 0) {
            return highScore;
        }
        return  null;
    }

    render() {
        return (
            <ScoreboardContext.Provider value={{
                players:this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer,
                    getHighScore: this.getHighScore
                }
              }
            }>
                {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
}

export const Consumer = ScoreboardContext.Consumer;
