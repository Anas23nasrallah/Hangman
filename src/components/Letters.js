import { Component } from "react";
import React from "react";
import {Letter} from './Letter'

export class Letters extends Component{
    render(){
        const letterStatus = this.props.letterStatus
        return (
            <div>
                <div>Available letters</div>
                {Object.keys(letterStatus).map(l => letterStatus[l] ? <Letter key={l} className="crossed" letter={l} /> : <Letter className="not-crossed" key={l} letter={l} selectLetter={this.props.selectLetter}/>)}
            </div>
        )
    }
}

export default Letters



      
