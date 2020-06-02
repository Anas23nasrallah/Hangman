import { Component } from "react";
import React from 'react';

class Solution extends Component {
    render() {
        const spaces = ['-', '-', '-', '-']
        return (
            <div> {spaces.map(s => <span>{s}</span>)}
                <div><em>Hint</em></div>
            </div>
        )
    }
}

export default Solution