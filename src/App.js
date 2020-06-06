import React from 'react';
import Solution from './components/Solution'
import './App.css';
import Score from './components/Score';
import Letters from './components/Letters';
import { Component } from 'react'
import { EndGame } from './components/EndGame';

class App extends Component {

  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'ANANAS',
        hint: 'best fruit'
      },
      score: 100
    }
  }

  selectLetter = async (letter) => {
    let letterStatus = { ...this.state.letterStatus };
    letterStatus[letter] = true;
    this.setState({
      letterStatus
    })
    if (this.state.solution.word.includes(letter)) {
      let score = this.state.score + 5
      this.setState({
        score
      })
    } else {
      let score = this.state.score - 20
      this.setState({
        score
      })
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div id='game'>
        < Score score={this.state.score} />
        < Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        < Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        < EndGame letterStatus={this.state.letterStatus} solution={this.state.solution} score={this.state.score}/>
      </div>

    )
  }
}

export default App;
