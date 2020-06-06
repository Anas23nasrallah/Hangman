import { Component } from "react";
import React from "react";

export class Score extends Component{
    render(){
        return (
            <div>{this.props.score}</div>
        )
    }
}

export default Score