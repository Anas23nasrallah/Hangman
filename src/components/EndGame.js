import { Component } from "react";
import React from "react";

export class EndGame extends Component {
    gameEnded = () => {
        if (this.props.score <= 0) {
            return true
        }
        for (let letter of this.props.solution.word) {
            if (!this.props.letterStatus[letter]) {
                return false
            }
        }
        return true
    }
    render() {
        return (
            <div>
                {this.gameEnded() ? (this.props.score <= 0 ? <div>LOST</div> : <div>CONGRATS</div> ) : null}
            </div>
        )
    }
}

export default EndGame