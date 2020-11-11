import React, { Component } from 'react';
import CharacterCard from './components/characterCard';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import characters from './characters.json';
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
    characters: characters,
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            clicked={character.clicked}
          />
        ))}
        <audio src="./media/KingOfTheHill.mp3" />
      </Wrapper>
    );
  }
}

export default App;
