import { Component } from "react";
import React from "react";

export class Letter extends Component {
    selectLetter = () => {
        if (this.props.className === "not-crossed") {
            this.props.selectLetter(this.props.letter)
        }
    }
    render() {
        return (
            <span className={this.props.className} onClick={this.selectLetter}>{this.props.letter}</span>
        )
    }
}

export default Letter