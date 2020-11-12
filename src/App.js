import React, { Component } from 'react';
import CharacterCard from './components/characterCard';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import characters from './characters.json';
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
    characters: characters,
    score: 0,
    highScore: 0
  };

  //handle if a character is clicked
  clickCharacter = (id) => {

    console.log(characters)
    const clickCheck = this.state.characters.find((char) => char.id === id);
    const shuffleCharacters = (char) => {
      char.sort(() => Math.random() - 0.5);
    };
    const resetClick = (list) =>
      list.map((current) => ({ ...current, clicked: false }));

    //checks if current click has been clicked before then returns them all to false
    if (clickCheck.clicked === true) {
      resetClick(characters);
      this.setState({score: 0})
      return;
    } else {
      let characters1 = this.state.characters.map((char) => {
        if (char.id === id) {
          return {
            //if this is the id you are looking for set click to true
            ...char,
            clicked: true
          };
        }
        return char;
      });
      this.setState({ characters: characters1, score: this.state.score + 1 });
      console.log(this.state.score);
      shuffleCharacters(characters1);
    }
  };

  //shuffle the array

  //need a state statement that checks all indexes in array and ensure that all are
  render() {
    console.log('render')
    return (
      <Wrapper>
        <Navbar 
        score={this.state.score}
        />
        <Jumbotron />
        {this.state.characters.map((character) => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            clicked={character.clicked}
            clickCharacter={this.clickCharacter}
          />
        ))}
        <audio src="./media/KingOfTheHill.mp3" type="audio/mpeg" />
      </Wrapper>
    );
  }
}

export default App;
