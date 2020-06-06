import { Component } from "react";
import React from 'react';
import Letter from "./Letter";

class Solution extends Component {
    render() {
        const solutionWord = [...this.props.solution.word]
        const letterStatus = this.props.letterStatus
        return (
            <div> {solutionWord.map((l, i) => letterStatus[l] ? <Letter key={i} letter={l} /> : <Letter key={i} letter={"_ "} />)}
                <div> <em> HINT : {this.props.solution.hint}</em></div>
            </div>
        )
    }
}

export default Solution